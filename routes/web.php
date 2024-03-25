<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SellController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Admin page route
Route::middleware('auth')->group(function () {

  Route::post('masterside/cpu', [AdminController::class, 'storeCpu'])->name('masterside/cpu');
  Route::post('masterside/socket', [AdminController::class, 'storeSocket'])->name('masterside/socket');

  Route::resource('masterside', AdminController::class);
});

Route::get('/', function () {
  return Inertia::render('Welcome', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register')
  ]);
});

//Sell pages routes
Route::middleware('auth')->group(function () {
  Route::controller(SellController::class)->group(function (){
    Route::get('sell/cpu', 'showSellCpu')->name('sell.cpu');
    Route::post('store/cpu', 'sellCpu')->name('store.cpu');
    Route::resource('sell', SellController::class);
  });
});

//Products pages routes
Route::controller(ProductsController::class)->group(function(){
  Route::get('products/cpu',[ProductsController::class, 'productsCpu'])->name('products.cpu');
  Route::resource('products', ProductsController::class);

});


Route::get('products/cpu-cooler', function () {return Inertia::render('Products/CpuCooler');})->name('products/cooler');
Route::get('products/motherboard', function () {return Inertia::render('Products/Motherboard');})->name('products/mobo');
Route::get('products/memory', function () {return Inertia::render('Products/Memory');})->name('products/memory');
Route::get('products/storage', function () {return Inertia::render('Products/Storage');})->name('products/disk');
Route::get('products/graphics-card', function () {return Inertia::render('Products/Gpu');})->name('products/gpu');
Route::get('products/power-supply', function () {return Inertia::render('Products/Psu');})->name('products/psu');
Route::get('products/case', function () {return Inertia::render('Products/Case');})->name('products/case');



Route::get('pcbuilder', function () {
  return Inertia::render('PCbuilder');
})->name('pcbuilder');






Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
