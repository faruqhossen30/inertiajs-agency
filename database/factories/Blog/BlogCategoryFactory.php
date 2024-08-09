<?php

namespace Database\Factories\Blog;

use App\Models\Blog\Blog;
use App\Models\Blog\BlogCategory;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class BlogCategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     protected $model = BlogCategory::class;

    public function definition(): array
    {
        return [
            'blog_id' => Blog::factory(),
            'category_id' => Category::factory(),
        ];
    }
}
