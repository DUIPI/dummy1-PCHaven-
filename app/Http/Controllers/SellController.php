<?php

namespace App\Http\Controllers;

use App\Models\ProductCpu;
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
    // $sellCpu = new ProductCpu();
    // $sellCpu->cpu_image = $req->input('cpu_image');
    // $sellCpu->p_cpu_name = $req->input('p_cpu_name');
    // $sellCpu->core_count = $req->input('core_count');
    // $sellCpu->core_clock = $req->input('core_clock');
    // $sellCpu->boost_clock = $req->input('boost_clock');
    // $sellCpu->tdp = $req->input('tdp');
    // $sellCpu->int_graphics = $req->input('int_graphics');
    // $sellCpu->p_cpu_price = $req->input('p_cpu_price');
    // $sellCpu->cpu_tailbar = $req->input('cpu_tailbar');

    $sellcpu = $req->validate([
      'cpu_image' => 'nullable',
      'p_cpu_name' => 'required',
      'core_count' => 'required|numeric',
      'core_clock' => 'required|numeric',
      'boost_clock' => 'nullable|numeric',
      'tdp' => 'nullable|numeric',
      'int_graphics' => 'nullable',
      'p_cpu_price' => 'required|numeric',
      'cpu_tailbar' => 'nullable'
    ]);

    // if ($req->hasFile('cpu_image')) {
    //   $file = $req->file('cpu_image');
    //   $extention = $file->getClientOriginalExtension();
    //   $filename = time() . '.' . $extention;
    //   $file->move('public/pics', $filename);
    //   $sellCpu->cpu_image = $filename;
    // }

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
      'cooler_name' => 'required',
      'fan_rpm' => 'nullable|numeric',
      'noice_lvl' => 'nullable|numeric',
      'cooler_color' => 'required',
      'cooler_size' => 'nullable|numeric',
      'cooler_price' => 'required'
    ]);

    $req->user()->userpCooler()->create($sellCooler);

    return redirect(route('products.cooler'));
  }

  //Motherboard
  public function showSellMobo(): Response
  {
    return Inertia::render('Sell/SellMoboPage', [
      'user' => auth()->user()
    ]);
  }

  public function sellMobo(Request $req): RedirectResponse
  {
    $sellmobo = $req->validate([
      'name' => 'required',
      'socket' => 'required',
      'hemjee' => 'required',
      'memory_max' => 'required',
      'memory_slot' => 'required',
      'color' => 'required',
      'price' => 'required'
    ]);

    $req->user()->userpMobo()->create($sellmobo);
    return redirect(route('products.cooler'));
  }
}
