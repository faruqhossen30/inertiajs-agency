<?php

namespace App\Models\Service;

use App\Models\Category;
use App\Models\Feature;
use App\Models\Review;
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
        'description_code',
        'status',
        'basic_price',
        'standard_price',
        'premium_price',
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'service_categories');
    }
    public function features()
    {
        return $this->belongsToMany(Feature::class, 'service_features');
    }
    public function items()
    {
        return $this->hasMany(ServiceFeature::class)->orderBy('id', 'desc');
    }
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
