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
    $cartItems1 = session()->get('cartMobo', []);
    $cartItems2 = session()->get('cartRam', []);
    $cartItems3 = session()->get('cartCooler', []);
    $cartItems4 = session()->get('cartDisk', []);
    $cartItems5 = session()->get('cartGpu', []);
    $cartItems6 = session()->get('cartPsu', []);
    $cartItems7 = session()->get('cartCase', []);

    return Inertia::render('PCbuilder', [
      'user' => auth()->user(),
      'cartItems' => $cartItems,
      'cartItems1' => $cartItems1,
      'cartItems2' => $cartItems2,
      'cartCooler' => $cartItems3,
      'cartDisk' => $cartItems4,
      'cartGpu' => $cartItems5,
      'cartPsu' => $cartItems6,
      'cartCase' => $cartItems7
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

  public function addMobo(Request $request)
  {
    $mobo = $request->input('mobo');

    $itemId = $mobo['id'];

    $cartItems1 = session()->get('cartMobo', []);

    // Check if the CPU is already in the cart based on its "id"
    $moboExists = false;
    foreach ($cartItems1 as $item) {
      if ($item['id'] === $itemId) {
        $moboExists = true;
        break;
      }
    }

    if ($moboExists) {
      // If the CPU is already in the cart, increase its quantity
      foreach ($cartItems1 as &$item) {
        if ($item['id'] === $itemId) {
          $item['quantity'] += 1;
          break;
        }
      }
    } else {
      // If the CPU is not in the cart, add it with quantity 1
      $mobo['quantity'] = 1;
      $cartItems1[] = $mobo;
    }

    session()->put('cartMobo', $cartItems1);

    return to_route('pc-builder.index');
  }

  public function addRam(Request $request)
  {
    $ram = $request->input('ram');

    $itemId = $ram['id'];

    $cartItems2 = session()->get('cartRam', []);

    // Check if the CPU is already in the cart based on its "id"
    $ramExists = false;
    foreach ($cartItems2 as $item) {
      if ($item['id'] === $itemId) {
        $ramExists = true;
        break;
      }
    }

    if ($ramExists) {
      // If the CPU is already in the cart, increase its quantity
      foreach ($cartItems2 as &$item) {
        if ($item['id'] === $itemId) {
          $item['quantity'] += 1;
          break;
        }
      }
    } else {
      // If the CPU is not in the cart, add it with quantity 1
      $ram['quantity'] = 1;
      $cartItems2[] = $ram;
    }

    session()->put('cartRam', $cartItems2);

    return to_route('pc-builder.index');
  }

  public function addCooler(Request $request)
  {
    $cooler = $request->input('cooler');

    $itemId = $cooler['id'];

    $cartItems3 = session()->get('cartCooler', []);

    // Check if the CPU is already in the cart based on its "id"
    $coolerExists = false;
    foreach ($cartItems3 as $item) {
      if ($item['id'] === $itemId) {
        $coolerExists = true;
        break;
      }
    }

    if ($coolerExists) {
      // If the CPU is already in the cart, increase its quantity
      foreach ($cartItems3 as &$item) {
        if ($item['id'] === $itemId) {
          $item['quantity'] += 1;
          break;
        }
      }
    } else {
      // If the CPU is not in the cart, add it with quantity 1
      $cooler['quantity'] = 1;
      $cartItems3[] = $cooler;
    }

    session()->put('cartCooler', $cartItems3);

    return to_route('pc-builder.index');
  }

  public function addDisk(Request $request)
  {
    $disk = $request->input('disk');

    $itemId = $disk['id'];

    $cartItems4 = session()->get('cartDisk', []);

    // Check if the CPU is already in the cart based on its "id"
    $diskExists = false;
    foreach ($cartItems4 as $item) {
      if ($item['id'] === $itemId) {
        $diskExists = true;
        break;
      }
    }

    if ($diskExists) {
      // If the CPU is already in the cart, increase its quantity
      foreach ($cartItems4 as &$item) {
        if ($item['id'] === $itemId) {
          $item['quantity'] += 1;
          break;
        }
      }
    } else {
      // If the CPU is not in the cart, add it with quantity 1
      $disk['quantity'] = 1;
      $cartItems4[] = $disk;
    }

    session()->put('cartDisk', $cartItems4);

    return to_route('pc-builder.index');
  }

  public function addGpu(Request $request)
  {
    $gpu = $request->input('gpu');

    $itemId = $gpu['id'];

    $cartItems5 = session()->get('cartGpu', []);

    // Check if the CPU is already in the cart based on its "id"
    $ramExists = false;
    foreach ($cartItems5 as $item) {
      if ($item['id'] === $itemId) {
        $ramExists = true;
        break;
      }
    }

    if ($ramExists) {
      // If the CPU is already in the cart, increase its quantity
      foreach ($cartItems5 as &$item) {
        if ($item['id'] === $itemId) {
          $item['quantity'] += 1;
          break;
        }
      }
    } else {
      // If the CPU is not in the cart, add it with quantity 1
      $gpu['quantity'] = 1;
      $cartItems5[] = $gpu;
    }

    session()->put('cartGpu', $cartItems5);

    return to_route('pc-builder.index');
  }

  public function addPsu(Request $request)
  {
    $psu = $request->input('psu');

    $itemId = $psu['id'];

    $cartItems6 = session()->get('cartPsu', []);

    // Check if the CPU is already in the cart based on its "id"
    $ramExists = false;
    foreach ($cartItems6 as $item) {
      if ($item['id'] === $itemId) {
        $ramExists = true;
        break;
      }
    }

    if ($ramExists) {
      // If the CPU is already in the cart, increase its quantity
      foreach ($cartItems6 as &$item) {
        if ($item['id'] === $itemId) {
          $item['quantity'] += 1;
          break;
        }
      }
    } else {
      // If the CPU is not in the cart, add it with quantity 1
      $psu['quantity'] = 1;
      $cartItems6[] = $psu;
    }

    session()->put('cartPsu', $cartItems6);

    return to_route('pc-builder.index');
  }

  public function addCase(Request $request)
  {
    $case = $request->input('casee');

    $itemId = $case['id'];

    $cartItems7 = session()->get('cartCase', []);

    // Check if the CPU is already in the cart based on its "id"
    $ramExists = false;
    foreach ($cartItems7 as $item) {
      if ($item['id'] === $itemId) {
        $ramExists = true;
        break;
      }
    }

    if ($ramExists) {
      // If the CPU is already in the cart, increase its quantity
      foreach ($cartItems7 as &$item) {
        if ($item['id'] === $itemId) {
          $item['quantity'] += 1;
          break;
        }
      }
    } else {
      // If the CPU is not in the cart, add it with quantity 1
      $case['quantity'] = 1;
      $cartItems7[] = $case;
    }

    session()->put('cartCase', $cartItems7);

    return to_route('pc-builder.index');
  }

  // Removing items from the List
  public function removeCpu(Request $request)
  {
    $cpuIdToRemove = $request->input('cpu');

    $cartItems = session()->get('cart', []);

    // Find the index of the CPU in the cart items array
    $cpuIndex = -1;
    foreach ($cartItems as $index => $item) {
      if ($item['id'] === $cpuIdToRemove) {
        $cpuIndex = $index;
        break;
      }
    }

    if ($cpuIndex !== -1) {
      // Remove the CPU from the cart items array
      unset($cartItems[$cpuIndex]);
      // Re-index the array after removal
      $cartItems = array_values($cartItems);
      // Update the session with the modified cart data
      session()->put('cart', $cartItems);
    }

    return to_route('pc-builder.index');
  }
}
