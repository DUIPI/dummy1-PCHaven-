<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ListController extends Controller
{
  public function index(): Response
  {
    $cartItems = session()->get('cart', []);

    return Inertia::render('PCbuilder', [
      'user' => auth()->user(),
      'cartItems' => $cartItems
    ]);
  }

  public function addCpu(Request $request)
  {
    $cpu = $request->input('cpu');

    $itemId = $cpu['id'];

    $cartItems = session()->get('cart', []);

    // Check if the CPU is already in the cart based on its "id"
    $cpuExists = false;
    foreach ($cartItems as $item) {
        if ($item['id'] === $itemId) {
            $cpuExists = true;
            break;
        }
    }

    if ($cpuExists) {
        // If the CPU is already in the cart, increase its quantity
        foreach ($cartItems as &$item) {
            if ($item['id'] === $itemId) {
                $item['quantity'] += 1;
                break;
            }
        }
    } else {
        // If the CPU is not in the cart, add it with quantity 1
        $cpu['quantity'] = 1;
        $cartItems[] = $cpu;
    }

    session()->put('cart', $cartItems);

    return to_route('pc-builder.index');
  }

}
