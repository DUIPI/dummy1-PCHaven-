<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

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

  public function sellCooler(Request $req)
  {
    $sellCooler = $req->validate([
      'name' => 'required',
      'fan_rpm' => 'nullable|numeric',
      'noice_lvl' => 'nullable|numeric',
      'color' => 'required',
      'size' => 'nullable|numeric',
      'price' => 'required',
      'image' => 'nullable|image'
    ]);
    /** @var $image \Illuminate\Http\UploadedFile */

    $image = $sellCooler['image'] ?? null;
    if ($image) {
      $sellCooler['image'] = $image->store('cooler/' . Str::random(), 'public');
    }

    $req->user()->userpCooler()->create($sellCooler);

    return to_route('products.cooler');
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

  // Disk
  public function showSellDisk(): Response
  {
    return Inertia::render('Sell/SellDiskPage', [
      'user' => auth()->user()
    ]);
  }

  public function sellDisk(Request $req)
  {
    $sellDisk = $req->validate([
      'name' => 'required',
      'capacity' => 'nullable|numeric',
      'type' => 'nullable',
      'cache' => 'required|numeric',
      'interface' => 'nullable',
      'price' => 'required',
      'image' => 'nullable|image'
    ]);
    /** @var $image \Illuminate\Http\UploadedFile */

    $image = $sellDisk['image'] ?? null;
    if ($image) {
      $sellDisk['image'] = $image->store('disk/' . Str::random(), 'public');
    }

    $req->user()->userpDisk()->create($sellDisk);

    return to_route('products.storage');
  }

  // Gpu
  public function showSellGpu(): Response
  {
    return Inertia::render('Sell/SellGpuPage', [
      'user' => auth()->user()
    ]);
  }

  public function sellGpu(Request $req)
  {
    $sellGpu = $req->validate([
      'name' => 'required',
      'chipset' => 'required',
      'memory' => 'nullable',
      'c_clock' => 'required|numeric',
      'b_clock' => 'nullable',
      'color' => 'nullable',
      'length' => 'nullable',
      'price' => 'required',
      'image' => 'nullable|image'
    ]);
    /** @var $image \Illuminate\Http\UploadedFile */

    $image = $sellGpu['image'] ?? null;
    if ($image) {
      $sellGpu['image'] = $image->store('GPU/' . Str::random(), 'public');
    }

    $req->user()->userpGpu()->create($sellGpu);

    return to_route('products.gpu');
  }

  // PSU
  public function showSellPsu(): Response
  {
    return Inertia::render('Sell/SellPsuPage', [
      'user' => auth()->user()
    ]);
  }

  public function sellPsu(Request $req)
  {
    $sellPsu = $req->validate([
      'name' => 'required',
      'buteemj' => 'nullable',
      'watt' => 'nullable|numeric',
      'modular' => 'required',
      'color' => 'nullable',
      'price' => 'required',
      'image' => 'nullable|image'
    ]);
    /** @var $image \Illuminate\Http\UploadedFile */

    $image = $sellPsu['image'] ?? null;
    if ($image) {
      $sellPsu['image'] = $image->store('PSU/' . Str::random(), 'public');
    }

    $req->user()->userpPsu()->create($sellPsu);

    return to_route('products.psu');
  }

  // Case
  public function showSellCase(): Response
  {
    return Inertia::render('Sell/SellCasePage', [
      'user' => auth()->user()
    ]);
  }

  public function sellCase(Request $req)
  {
    $sellCase = $req->validate([
      'name' => 'required',
      'type' => 'nullable',
      'color' => 'nullable',
      's_panel' => 'required',
      'price' => 'required',
      'image' => 'nullable|image'
    ]);
    /** @var $image \Illuminate\Http\UploadedFile */

    $image = $sellCase['image'] ?? null;
    if ($image) {
      $sellCase['image'] = $image->store('case/' . Str::random(), 'public');
    }

    $req->user()->userpCase()->create($sellCase);

    return to_route('products.case');
  }
}
