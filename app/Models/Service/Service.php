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
        'id',
        'title',
        'slug',
        'thumbnail',
        'short_description',
        'description',
        'description_code',
        'basic_price',
        'standard_price',
        'premium_price',
        'basic_day',
        'standard_day',
        'premium_day',
        'basic_description',
        'standard_description',
        'premium_description',
        'status'
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'service_categories');
    }
    public function features()
    {
        return $this->belongsToMany(Feature::class, 'service_features');
    }

    public function additionalFeatures()
    {
        return $this->belongsToMany(Feature::class, 'service_features');
    }

    public function items()
    {
        return $this->hasMany(ServiceFeature::class)->orderBy('id', 'asc');
    }

    public function faqs()
    {
        return $this->hasMany(ServiceFaq::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

}
