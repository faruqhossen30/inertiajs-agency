<?php

namespace Database\Seeders;

use App\Models\Feature;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $features = array(
            array('id' => '1','title' => '1. 1 page/screen','category_id' => '2','created_at' => '2024-09-10 18:23:58','updated_at' => '2024-09-10 18:23:58'),
            array('id' => '2','title' => '2. 1 custom asset','category_id' => '2','created_at' => '2024-09-10 18:24:18','updated_at' => '2024-09-10 18:24:18'),
            array('id' => '3','title' => '3. Responsive design','category_id' => '2','created_at' => '2024-09-10 18:24:27','updated_at' => '2024-09-10 18:24:27'),
            array('id' => '4','title' => '4. Wireframes','category_id' => '2','created_at' => '2024-09-10 18:24:35','updated_at' => '2024-09-10 18:24:35'),
            array('id' => '5','title' => '5. Include source file','category_id' => '2','created_at' => '2024-09-10 18:24:45','updated_at' => '2024-09-10 18:24:45'),
            array('id' => '6','title' => '6. Prototype','category_id' => '2','created_at' => '2024-09-10 18:45:25','updated_at' => '2024-09-10 18:45:25'),
            array('id' => '7','title' => '7. One Time Delivery','category_id' => '2','created_at' => '2024-09-10 18:45:44','updated_at' => '2024-09-10 18:45:44')
          );

          Feature::insert($features);
    }
}
