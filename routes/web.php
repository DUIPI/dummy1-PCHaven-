<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ListController;
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

  Route::post('masterside/socket', [AdminController::class, 'storeSocket'])->name('masterside/socket');
  Route::post('masterside/cpu', [AdminController::class, 'storeCpu'])->name('masterside/cpu');
  Route::post('masterside/memory', [AdminController::class, 'storeRam'])->name('masterside/memory');
  Route::post('masterside/mobo', [AdminController::class, 'storeMobo'])->name('masterside/mobo');

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
  Route::controller(SellController::class)->group(function () {
    Route::get('sell/cpu', 'showSellCpu')->name('sell.cpu');
    Route::post('store/cpu', 'sellCpu')->name('store.cpu');

    Route::get('sell/memory', 'showSellRam')->name('sell.ram');
    Route::post('store/ram', 'sellRam')->name('store.ram');

    Route::get('sell/motherboard', 'showSellMobo')->name('sell.mobo');
    Route::post('store/mobo', 'sellMobo')->name('store.mobo');

    Route::get('sell/cpu-cooler', 'showSellCooler')->name('sell.cooler');
    Route::post('store/cooler', 'sellCooler')->name('store.cooler');

    Route::get('sell/storage', 'showSellDisk')->name('sell.disk');
    Route::post('store/disk', 'sellDisk')->name('store.disk');

    Route::get('sell/gpu', 'showSellGpu')->name('sell.gpu');
    Route::post('store/gpu', 'sellGpu')->name('store.gpu');

    Route::get('sell/psu', 'showSellPsu')->name('sell.psu');
    Route::post('store/psu', 'sellPsu')->name('store.psu');

    Route::get('sell/case', 'showSellCase')->name('sell.case');
    Route::post('store/case', 'sellCase')->name('store.case');

    Route::resource('sell', SellController::class);
  });
});

//Products pages routes
Route::controller(ProductsController::class)->group(function () {
  Route::get('products/cpu', 'productsCpu')->name('products.cpu');
  Route::get('products/cpu-cooler', 'productsCooler')->name('products.cooler');
  Route::get('products/motherboard', 'productsMobo')->name('products.mobo');
  Route::get('products/memory', 'productsMemory')->name('products.memory');
  Route::get('products/storage', 'productsStorage')->name('products.storage');
  Route::get('products/graphics-card', 'productsGpu')->name('products.gpu');
  Route::get('products/power-supply', 'productsPsu')->name('products.psu');
  Route::get('products/case', 'productsCase')->name('products.case');

  Route::resource('products', ProductsController::class);
});

//PC-builder routes
Route::controller(ListController::class)->group(function(){

  Route::post('add/cpu', 'addCpu')->name('add.cpu');
  Route::post('add/mobo', 'addMobo')->name('add.mobo');
  Route::post('add/ram', 'addRam')->name('add.ram');
  Route::post('add/gpu', 'addGpu')->name('add.gpu');
  Route::post('add/psu', 'addPsu')->name('add.psu');
  Route::post('add/cooler', 'addCooler')->name('add.cooler');
  Route::post('add/disk', 'addDisk')->name('add.disk');
  Route::post('add/case', 'addCase')->name('add.case');


  Route::resource('pc-builder', ListController::class);
});



Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
