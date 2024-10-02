<?php

namespace App\Models\Service;

use App\Models\Feature;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceFeature extends Model
{
    use HasFactory;
    protected $fillable = ['service_id', 'feature_id', 'basic', 'standard', 'premium','is_additional'];

    public function feature()
    {
        return $this->hasOne(Feature::class, 'id', 'feature_id');
    }
}
