<?php

namespace App\Models\Service;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'thumbnail',
        'short_description',
        'description',
        'description_code'
    ];

    public function categories(){
        return $this->belongsToMany(Category::class,'service_categories');
    }
}
