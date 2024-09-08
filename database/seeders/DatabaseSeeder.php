<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Blog\Blog;
use App\Models\Blog\BlogCategory;
use App\Models\Category;
use App\Models\Feature;
use App\Models\Service\Service;
use AutoquestionSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            AdminSeeder::class,
            UserSeeder::class,
            PackageSeeder::class,
            CategorySeeder::class
        ]);
        Category::factory(5)->create();
        Blog::factory(50)
            ->create()
            ->each(function ($blog) {
                $blog->categories()->attach(collect([1, 2, 3, 4, 5])->random(3));
            });

        Service::factory(5)
            ->create()
            ->each(function ($blog) {
                $blog->categories()->attach(collect([1, 2, 3, 4, 5])->random(3));
            });

            for ($i=0; $i < 10; $i++) {
                Feature::create([
                    'title'=> fake()->sentence(),
                    'category_id'=> rand(1,5)
                ]);
            }
    }
}
