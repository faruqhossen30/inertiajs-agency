<?php

use App\Http\Controllers\AboutpageController;
use App\Http\Controllers\Auth\GoogleauthController;
use App\Http\Controllers\BlogpageController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DataController;
use App\Http\Controllers\FaqpageController;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServicepageController;
use App\Http\Controllers\TeamPageController;
use App\Http\Controllers\User\DepositController;
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

Route::get('/', [HomepageController::class, 'index'])->name('homepage');

Route::get('faq', [FaqpageController::class, 'index'])->name('faq.page');
Route::get('contact', [ContactController::class, 'index'])->name('contact');
Route::get('about-us', [AboutpageController::class, 'index'])->name('aboutpage');
Route::get('teams', [TeamPageController::class, 'teamPage'])->name('teampage');
Route::get('services', [ServicepageController::class, 'index'])->name('servicepage');
Route::get('services/{slug}', [ServicepageController::class, 'SingleService'])->name('single.service');

Route::get('order/{id}',[OrderController::class,'order'])->name('order');
Route::get('blogs', [BlogpageController::class, 'index'])->name('blogpage');
Route::get('blog/{slug}', [BlogpageController::class, 'singleBlog'])->name('single.blog');
Route::get('auth/google', [GoogleauthController::class, 'redirect'])->name('google-auth');
Route::get('auth/google/call-back', [GoogleauthController::class, 'callbackGoogle']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
});

Route::prefix('data')->group(function () {
    Route::get('categories', [DataController::class, 'categories'])->name('data.categories');
});

require __DIR__.'/auth.php';
