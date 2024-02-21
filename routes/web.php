<?php

use App\Http\Controllers\DulgnController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Models\Posts;
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
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';



// // ---------Testing here

// Route::get('/home', function() {

//     $posts = [];

//     if(auth()->check()){
//         $posts = auth()->user()->userPosts()->latest()->get();
//     }

//     return view('homePage', ['posts'=>$posts]);
// });
// // User routes
// Route::post('/register', [DulgnController::class, 'register']);
// Route::post('/login', [DulgnController::class, 'login']);
// Route::post('/logout', [DulgnController::class, 'logout']);

// //Posts routes
// Route::post('/create-post', [PostController::class, 'createPost']);
// Route::get('/edit-post/{post}', [PostController::class, 'showEditScreen']);
// Route::put('/edit-post/{post}', [PostController::class, 'updatePost']);
// Route::delete('/delete-post/{post}', [PostController::class, 'deletePost']);

