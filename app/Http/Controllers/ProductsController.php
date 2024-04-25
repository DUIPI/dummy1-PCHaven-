<?php

namespace App\Http\Controllers;

use App\Http\Resources\CaseResource;
use App\Http\Resources\CoolersResource;
use App\Http\Resources\CpuResource;
use App\Http\Resources\DiskResource;
use App\Http\Resources\GpuResource;
use App\Http\Resources\MoboResource;
use App\Http\Resources\PsuResource;
use App\Http\Resources\RamResource;
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
    if (request("cpuname")) {
      $query->where("name", "like", "%" . request("cpuname") . "%");
    }
    $cpus = $query->paginate(10)->onEachSide(1);

    return Inertia::render('Products/Cpu', [
      'user' => auth()->user(),
      'queryParams' => request()->query() ?: null,
      'pcpus' => CpuResource::collection($cpus),
    ]);
  }

  public function productsMobo(): Response
  {
    $query = ProductMobo::query()->latest();
    if (request("name")) {
      $query->where("name", "like", "%" . request("name") . "%");
    }
    $mobos = $query->paginate(10)->onEachSide(1);

    return Inertia::render('Products/Motherboard', [
      'user' => auth()->user(),
      'pmobos' => MoboResource::collection($mobos),
      'queryParams' => request()->query() ?: null,
    ]);
  }

  public function productsMemory(): Response
  {
    $query = ProductRam::query()->latest();
    if (request("name")) {
      $query->where("name", "like", "%" . request("name") . "%");
    }
    $rams = $query->paginate(10)->onEachSide(1);

    return Inertia::render('Products/Memory', [
      'user' => auth()->user(),
      'show_mems' => RamResource::collection($rams),
      'queryParams' => request()->query() ?: null,
    ]);
  }

  //showing Products/Cooler page

  public function productsCooler(): Response
  {
    $query = ProductCooler::query()->latest();
    if (request("name")) {
      $query->where("name", "like", "%" . request("name") . "%");
    }
    $coolers = $query->paginate(10)->onEachSide(1);

    return Inertia::render('Products/CpuCooler', [
      'user' => auth()->user(),
      'coolers' => CoolersResource::collection($coolers),
      'queryParams' => request()->query() ?: null,
    ]);
  }

  public function productsStorage(): Response
  {
    $query = ProductDisk::query()->latest();
    if (request("name")) {
      $query->where("name", "like", "%" . request("name") . "%");
    }
    $disks = $query->paginate(10)->onEachSide(1);

    return Inertia::render('Products/Storage', [
      'user' => auth()->user(),
      'disks' => DiskResource::collection($disks),
      'queryParams' => request()->query() ?: null,
    ]);
  }

  public function productsGpu(): Response
  {
    $query = ProductGpu::query()->latest();
    if (request("name")) {
      $query->where("name", "like", "%" . request("name") . "%");
    }
    $gpus = $query->paginate(10)->onEachSide(1);

    return Inertia::render('Products/Gpu', [
      'user' => auth()->user(),
      'queryParams' => request()->query() ?: null,
      'gpus' => GpuResource::collection($gpus),
    ]);
  }

  public function productsPsu(): Response
  {
    $query = ProductPsu::query()->latest();
    if (request("name")) {
      $query->where("name", "like", "%" . request("name") . "%");
    }
    $psus = $query->paginate(10)->onEachSide(1);

    return Inertia::render('Products/Psu', [
      'user' => auth()->user(),
      'queryParams' => request()->query() ?: null,
      'psus' => PsuResource::collection($psus),
    ]);
  }

  public function productsCase(): Response
  {
    $query = ProductCase::query()->latest();
    if (request("name")) {
      $query->where("name", "like", "%" . request("name") . "%");
    }
    $cases = $query->paginate(10)->onEachSide(1);

    return Inertia::render('Products/Case', [
      'user' => auth()->user(),
      'queryParams' => request()->query() ?: null,
      'cases' => CaseResource::collection($cases),
    ]);
  }
}
