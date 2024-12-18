<?php

use App\Http\Controllers\AboutpageController;
use App\Http\Controllers\Auth\GoogleauthController;
use App\Http\Controllers\BlogpageController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DataController;
use App\Http\Controllers\DisclaimerpageController;
use App\Http\Controllers\FaqpageController;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PrivacyPolicypageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServicepageController;
use App\Http\Controllers\TeamPageController;
use App\Http\Controllers\TermsandConditionsController;
use App\Http\Controllers\UserReviewController;
use Illuminate\Support\Facades\Route;

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
Route::get('contact/calendy', [ContactController::class, 'calendy'])->name('calendypage');
Route::get('about-us', [AboutpageController::class, 'index'])->name('aboutpage');
Route::get('teams', [TeamPageController::class, 'teamPage'])->name('teampage');
Route::get('Conditions', [TermsandConditionsController::class, 'termsandConditions'])->name('termsandConditions');
Route::get('privacy', [PrivacyPolicypageController::class, 'PrivacyPolicy'])->name('privacy.policy');
Route::get('disclaimer', [DisclaimerpageController::class, 'disclaimerpage'])->name('disclaimer');
Route::get('services', [ServicepageController::class, 'index'])->name('servicepage');
Route::get('services/{slug}', [ServicepageController::class, 'SingleService'])->name('single.service');

Route::get('reviewcreate',[UserReviewController::class,'reviewCreate'])->name('reviewcreate');
Route::post('reviewstore',[UserReviewController::class,'reviewStore'])->name('reviewstore')->middleware('auth');
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
