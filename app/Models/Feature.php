<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    use HasFactory;
    protected $fillable = ['title','category_id','is_additional'];

    public function category()
    {
        return $this->hasOne(Category::class, 'id', 'category_id');
    }


}
