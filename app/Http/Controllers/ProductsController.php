<?php

namespace App\Http\Controllers;

use App\Http\Resources\CoolersResource;
use App\Models\ProductCase;
use App\Models\ProductCooler;
use App\Models\ProductCpu;
use App\Models\ProductDisk;
use App\Models\ProductGpu;
use App\Models\ProductMobo;
use App\Models\ProductPsu;
use App\Models\ProductRam;
use Inertia\Inertia;
use Inertia\Response;

class ProductsController extends Controller
{
  //showing Products/Cpu page

  public function productsCpu(): Response
  {
    return Inertia::render('Products/Cpu', [
      'user' => auth()->user(),
      'p_cpus' => ProductCpu::with('user:id,name')->latest()->get(),
    ]);
  }

  //showing Products/Cooler page

  public function productsCooler(): Response
  {
    $query = ProductCooler::query()->latest();
    $coolers = $query->paginate(10)->onEachSide(1);

    return Inertia::render('Products/CpuCooler', [
      'user' => auth()->user(),
      'coolers' => CoolersResource::collection($coolers),
    ]);
  }

  public function productsMobo(): Response
  {
    return Inertia::render('Products/Motherboard', [
      'user' => auth()->user(),
      'mobos' => ProductMobo::with('user:id,name')->latest()->get()
    ]);
  }

  public function productsMemory(): Response
  {
    return Inertia::render('Products/Memory', [
      'user' => auth()->user(),
      'mems' => ProductRam::with('user:id,name')->latest()->get()
    ]);
  }

  public function productsStorage(): Response
  {
    return Inertia::render('Products/Storage', [
      'user' => auth()->user(),
      'disks' => ProductDisk::with('user:id,name')->latest()->get()
    ]);
  }

  public function productsGpu(): Response
  {
    return Inertia::render('Products/Gpu', [
      'user' => auth()->user(),
      'gpus' => ProductGpu::with('user:id,name')->latest()->get()
    ]);
  }

  public function productsPsu(): Response
  {
    return Inertia::render('Products/Psu', [
      'user' => auth()->user(),
      'psus' => ProductPsu::with('user:id,name')->latest()->get()
    ]);
  }

  public function productsCase(): Response
  {
    return Inertia::render('Products/Case', [
      'user' => auth()->user(),
      'cases' => ProductCase::with('user:id,name')->latest()->get()
    ]);
  }
}
