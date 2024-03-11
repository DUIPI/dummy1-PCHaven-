<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DulgnController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Models\Posts;
use App\Models\Socket;
use Illuminate\Foundation\Application;
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


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
});

Route::get('/product', function (){
  return Inertia::render('Product');
});


Route::get('/pcbuilder', function (){
  return Inertia::render('PCbuilder');
});

//Admin page route
Route::resource('masterside', AdminController::class)
  ->only(['index', 'store', 'update'])
  ->middleware('auth');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/sell', function (){
      return Inertia::render('Sell');
    });    
});

require __DIR__.'/auth.php';



