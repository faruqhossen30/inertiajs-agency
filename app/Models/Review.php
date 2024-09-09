<?php

namespace App\Models;

use App\Models\Service\Service;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'designation',
        'review',
        'rating',
        'thumbnail',
        'date',
        'service_id',
        'user_id'
    ];
    protected $dates = ['date'];

    public function users(){

        return $this->hasMany(User::class,'id','user_id');
    }
    public function service(){

        return $this->hasMany(Service::class,'id','service_id');
    }
}
