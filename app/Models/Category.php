<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = ['name','slug','description','thumbnail','icon','user_id','status'];


    public function features(){
        return $this->hasMany(Feature::class);
    }

}
