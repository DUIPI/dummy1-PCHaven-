<?php

namespace App\Http\Controllers;

use App\Http\Resources\CaseResource;
use App\Http\Resources\CoolersResource;
use App\Http\Resources\CpuResource;
use App\Http\Resources\DiskResource;
use App\Http\Resources\GpuResource;
use App\Http\Resources\PsuResource;
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
    $query = ProductCpu::query()->latest();
    $cpus = $query->paginate(10)->onEachSide(1);

    return Inertia::render('Products/Cpu', [
      'user' => auth()->user(),
      'pcpus' => CpuResource::collection($cpus),
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

  public function productsStorage(): Response
  {
    $query = ProductDisk::query()->latest();
    $disks = $query->paginate(10)->onEachSide(1);

    return Inertia::render('Products/Storage', [
      'user' => auth()->user(),
      'disks' => DiskResource::collection($disks),
    ]);
  }

  public function productsGpu(): Response
  {
    $query = ProductGpu::query()->latest();
    $gpus = $query->paginate(10)->onEachSide(1);

    return Inertia::render('Products/Gpu', [
      'user' => auth()->user(),
      'gpus' => GpuResource::collection($gpus),
    ]);
  }

  public function productsPsu(): Response
  {
    $query = ProductPsu::query()->latest();
    $psus = $query->paginate(10)->onEachSide(1);

    return Inertia::render('Products/Psu', [
      'user' => auth()->user(),
      'psus' => PsuResource::collection($psus),
    ]);
  }

  public function productsCase(): Response
  {
    $query = ProductCase::query()->latest();
    $cases = $query->paginate(10)->onEachSide(1);

    return Inertia::render('Products/Case', [
      'user' => auth()->user(),
      'cases' => CaseResource::collection($cases),
    ]);
  }
}
