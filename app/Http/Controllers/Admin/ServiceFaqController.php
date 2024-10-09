<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service\Service;
use App\Models\Service\ServiceFaq;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceFaqController extends Controller
{
    public function faqCreate(Request $request, $id){
        $service = Service::with('faqs')->firstWhere('id', $id);
        return Inertia::render('Admin/Service/FaqCreate', ['service' => $service]);
    }

    public function faqStore(Request $request, $id){

        $request->validate([
            'question'  => 'required|unique:service_faqs',
            'answer' => 'required'
        ]);

        $data = [
            'service_id' => $id,
            'question' => $request->question,
            'answer' => $request->answer,
        ];

        ServiceFaq::create($data);

        return to_route('service.faq.create', $id);
    }

    public function faqDestroy(Request $request, $id){

        ServiceFaq::firstWhere('id',$id)->delete();

        return redirect()->back();
    }
}
