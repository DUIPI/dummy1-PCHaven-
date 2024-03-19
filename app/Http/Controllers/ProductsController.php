<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductsController extends Controller
{
    //showing Products/Cpu page

    public function productsCpu(): Response
    {
      return Inertia::render('Products/Cpu');
    }

    //storing CPU product info

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

    return redirect(route('products/cpu'));
  }
}
