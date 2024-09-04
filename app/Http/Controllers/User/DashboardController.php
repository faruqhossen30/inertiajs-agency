<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    function dashboard()
    {

        // return 1;
        return Inertia::render('User/UserDashboardPage');
    }
}
