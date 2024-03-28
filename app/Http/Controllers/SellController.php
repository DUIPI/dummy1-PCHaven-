<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SellController extends Controller
{
    //Sell main page
    public function index(): Response
    {
      return Inertia::render('Sell', [
        'user' => auth()->user()
      ]);
    }

      //CPU
    public function showSellCpu(): Response
    {
      return Inertia::render('Sell/SellCpuPage', [
        'user' => auth()->user()
      ]);
    }

    public function sellCpu(Request $req): RedirectResponse
  {
    $sellcpu = $req->validate([
      'cpu_image'=>'nullable',
      'p_cpu_name' => 'required',
      'core_count' => 'required|numeric',
      'core_clock' => 'required|numeric',
      'boost_clock'=> 'nullable|numeric',
      'tdp'=> 'nullable|numeric',
      'int_graphics'=> 'nullable',
      'p_cpu_price'=> 'required|numeric',
      'cpu_tailbar'=> 'nullable'
    ]);

    $req->user()->userpCpu()->create($sellcpu);

    return redirect(route('products.cpu'));
  }

    //Cooler
    public function showSellCooler(): Response
    {
      return Inertia::render('Sell/SellCoolerPage', [
        'user' => auth()->user()
      ]);
    }

    public function sellCooler(Request $req): RedirectResponse
  {
    $sellCooler = $req->validate([
      'cooler_name'=>'required',
      'fan_rpm'=>'nullable|numeric',
      'noice_lvl'=>'nullable|numeric',
      'cooler_color'=>'required',
      'cooler_size'=>'nullable|numeric',
      'cooler_price'=>'required'
    ]);

    $req->user()->userpCooler()->create($sellCooler);

    return redirect(route('products.cooler'));
  }
}
