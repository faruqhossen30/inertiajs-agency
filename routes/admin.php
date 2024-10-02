<?php

use App\Http\Controllers\Admin\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ServiceController;

use App\Http\Controllers\Admin\Blog\BlogcategoryController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\FaqController;
use App\Http\Controllers\Admin\FeatureController;
use App\Http\Controllers\Admin\PackageController;
use App\Http\Controllers\Admin\PakageController;
use App\Http\Controllers\Admin\ReviewController;
use App\Http\Controllers\Admin\ServiceFaqController;
use App\Http\Controllers\Admin\ServiceFeatureController;
use App\Http\Controllers\Admin\ServicePackageController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('admin/login', [AuthenticatedSessionController::class, 'create'])->name('adminlogin');
Route::post('admin/login', [AuthenticatedSessionController::class, 'store']);

Route::group(['prefix' => 'admin', 'middleware' => ['auth','admin']], function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');

    // Service
    Route::resource('service', ServiceController::class);
    Route::post('service/{id}',[ServiceController::class,'update'])->name('serviceupdate');

    Route::get('service/{id}/package',[ServicePackageController::class, 'packageCreate'])->name('service.package.create');
    Route::post('service/{id}/package',[ServicePackageController::class, 'packageStore'])->name('service.package.store');

    Route::get('service/{id}/feature',[ServiceFeatureController::class, 'create'])->name('service.feature.create');
    Route::post('service/{id}/feature',[ServiceFeatureController::class, 'store'])->name('service.feature.store');

    Route::get('service/{id}/additional-feature',[ServiceFeatureController::class, 'additionalFeatureCreate'])->name('service.additional-feature.create');
    Route::post('service/{id}/additional-feature',[ServiceFeatureController::class, 'additionalFeatureStore'])->name('service.additional-feature.store');
    Route::delete('service/{id}/additional-feature',[ServiceFeatureController::class, 'additionalFeatureStoreDestroy'])->name('service.additional-feature.destroy');

    Route::get('service/{id}/faq',[ServiceFaqController::class, 'faqCreate'])->name('service.faq.create');
    Route::post('service/{id}/faq',[ServiceFaqController::class, 'faqStore'])->name('service.faq.store');
    Route::delete('service/{id}/faq',[ServiceFaqController::class, 'faqDestroy'])->name('service.faq.destroy');


    // Feature
    Route::resource('feature', FeatureController::class);
    Route::resource('faq', FaqController::class);
    // Blog
    Route::resource('blogs', BlogController::class);
    Route::post('blog/{id}',[BlogController::class,'update'])->name('blogupdate');
    Route::resource('review', ReviewController::class);
    Route::post('review/{id}',[ReviewController::class,'update'])->name('reviewupdate');

    Route::resource('category', CategoryController::class);
    Route::post('category/{id}', [CategoryController::class, 'update'])->name('categoryupdate');

    Route::resource('blogcategory', BlogcategoryController::class);
    Route::resource('package', PackageController::class);
    Route::get('user/list', [UserController::class,'index'])->name('users');
    Route::get('user/show/{id}', [UserController::class,'show'])->name('user.show');
    Route::delete('user/delete/{id}', [UserController::class,'destroy'])->name('user.destroy');
});
