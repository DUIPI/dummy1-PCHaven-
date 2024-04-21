<?php

namespace App\Http\Controllers;

use App\Http\Resources\AdminCpuResource;
use App\Http\Resources\AdminMoboResource;
use App\Http\Resources\AdminRamResource;
use App\Models\Cpu;
use App\Models\Memory;
use App\Models\Socket;
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
    $cpus = Cpu::query()->orderBy('cpu_name', 'asc')->get();

    return Inertia::render('Sell/SellCpuPage', [
      'user' => auth()->user(),
      'cpus' => AdminCpuResource::collection($cpus)
    ]);
  }

  public function sellCpu(Request $req)
  {
    $sellCpu = $req->validate([
      'name' => 'required',
      'core_count' => 'required|numeric',
      'core_clock' => 'required|numeric',
      'boost_clock' => 'nullable|numeric',
      'tdp' => 'nullable|numeric',
      'graphics' => 'nullable',
      'price' => 'required|numeric',
      'tailbar' => 'nullable',
      'image' => 'nullable|image',
      'phone' => 'required'
    ]);

    /** @var $image \Illuminate\Http\UploadedFile */

    $image = $sellCpu['image'] ?? null;
    if ($image) {
      $sellCpu['image'] = $image->store('cpu/' . Str::random(), 'public');
    }

    $req->user()->userpCpu()->create($sellCpu);
    return to_route('products.cpu');
  }

  //Ram
  public function showSellRam(): Response
  {
    $rams = Memory::query()->orderBy('memory_gen', 'asc')->get();

    return Inertia::render('Sell/SellRamPage', [
      'user' => auth()->user(),
      'rams_api' => AdminRamResource::collection($rams)
    ]);
  }

  public function sellRam(Request $req)
  {
    $sellRam = $req->validate([
      'name' => 'required',
      'gen' => 'required|exists:memories,id',
      'speed' => 'required|numeric',
      'modules' => 'required',
      'color' => 'required',
      'price' => 'required',
      'image' => 'nullable|image',
      'phone' => 'required'
    ]);

    /** @var $image \Illuminate\Http\UploadedFile */

    $image = $sellRam['image'] ?? null;
    if ($image) {
      $sellRam['image'] = $image->store('ram/' . Str::random(), 'public');
    }

    $req->user()->userpRam()->create($sellRam);
    return to_route('products.memory');
  }


  //Motherboard
  public function showSellMobo(): Response
  {
    $mobos = Socket::query()->orderBy('socket_name', 'asc')->get();

    return Inertia::render('Sell/SellMoboPage', [
      'user' => auth()->user(),
      'mobos' => AdminMoboResource::collection($mobos)
    ]);
  }

  public function sellMobo(Request $req)
  {
    $sellmobo = $req->validate([
      'name' => 'required',
      'socket' => 'required|exists:sockets,id',
      'hemjee' => 'nullable',
      'memory_max' => 'required',
      'memory_slot' => 'required',
      'color' => 'required',
      'price' => 'required',
      'image' => 'nullable|image',
      'phone' => 'required'
    ]);

    /** @var $image \Illuminate\Http\UploadedFile */

    $image = $sellmobo['image'] ?? null;
    if ($image) {
      $sellmobo['image'] = $image->store('mobo/' . Str::random(), 'public');
    }

    $req->user()->userpMobo()->create($sellmobo);
    return to_route('products.mobo');
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
      'image' => 'nullable|image',
      'phone' => 'required'
    ]);
    /** @var $image \Illuminate\Http\UploadedFile */

    $image = $sellCooler['image'] ?? null;
    if ($image) {
      $sellCooler['image'] = $image->store('cooler/' . Str::random(), 'public');
    }

    $req->user()->userpCooler()->create($sellCooler);

    return to_route('products.cooler');
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
      'image' => 'nullable|image',
      'phone' => 'required'
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
      'image' => 'nullable|image',
      'phone' => 'required'
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
      'image' => 'nullable|image',
      'phone' => 'required'
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
      'image' => 'nullable|image',
      'phone' => 'required'
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
