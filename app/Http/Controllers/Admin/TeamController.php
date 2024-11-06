<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Review;
use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teams = Team::all();
        return Inertia::render('Admin/Teams/Index', ['teams' => $teams]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Teams/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // return $request->all();
        $request->validate([
            'name' => 'required|unique:teams',
        ]);
        $data = [
            'name'         => $request->name,
            'email'        => $request->email,
            'position'     => $request->position,
            'about'        => $request->about,
            'mobile'       => $request->mobile,
            'address'      => $request->address,
            'facebook'     => $request->facebook,
            'twitter'      => $request->twitter,
            'linkedin'     => $request->linkedin,
            'whatsup'      => $request->whatsup,
        ];
        if ($request->file('avatar')) {
            $file_name = $request->file('avatar')->store('avatar');
            $data['avatar'] = $file_name;
        }

        Team::create($data);

        return to_route('teams.index')->with('message', 'Team Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $team = Team::where('id', $id)->first();
        return Inertia::render('Admin/Teams/Edit', ['team' => $team]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|unique:teams',
        ]);

        $data=[
            'name'         => $request->name,
            'email'        => $request->email,
            'position'     => $request->position,
            'about'        => $request->about,
            'mobile'       => $request->mobile,
            'address'      => $request->address,
            'facebook'     => $request->facebook,
            'twitter'      => $request->twitter,
            'linkedin'     => $request->linkedin,
            'whatsup'      => $request->whatsup,
        ];
        if ($request->file('avatar')) {
            $file_name = $request->file('avatar')->store('avatar');
            $data['avatar'] = $file_name;
        }

        Team::firstwhere('id', $id)->update($data);

        return to_route('teams.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Team::where('id', $id)->delete();
        return redirect()->route('teams.index');
    }
}
