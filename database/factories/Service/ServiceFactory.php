<?php

namespace Database\Factories\Service;

use App\Models\Service\Service;
use Illuminate\Support\Str;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service\Service>
 */
class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Service::class;
    public function definition(): array
    {
        $title = $this->faker->sentence;
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'description' => $this->faker->paragraph,
            'description_code' => 'some',
            'basic_price' => rand(10,50),
            'standard_price' => rand(50,100),
            'premium_price' => rand(100,150),
        ];
    }
}
