<?php

namespace App\Http\Controllers;

use App\Models\ProductCpu;
use Inertia\Inertia;
use Inertia\Response;

class ProductsController extends Controller
{
    //showing Products/Cpu page

    public function productsCpu(): Response
    {
      return Inertia::render('Products/Cpu',[
        'user'=>auth()->user(),
        'p_cpus' => ProductCpu::with('user:id,name')->latest()->get(),
      ]);
    }

    
}
