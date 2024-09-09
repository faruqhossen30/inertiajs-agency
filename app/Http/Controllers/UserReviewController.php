<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserReviewController extends Controller
{
    public function reviewCreate(){

        $reviews = Review::with('users','service')->get();

        // return  $review ;
        return Inertia::render('SingleService',['reviews'=>$reviews]);
    }
    public function reviewStore(Request $request) {
        // return $request->all()
        $data=[
            'review'     => $request->review,
            'rating'     => $request->rating,
            'service_id' => $request->service_id,
            'user_id'    => Auth::user()->id,
        ];

        Review::create($data);
        return redirect()->back();
    }
}
