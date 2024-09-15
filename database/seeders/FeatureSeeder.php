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
            array('id' => '18','title' => '1 page/screen','category_id' => '2','created_at' => '2024-09-10 18:23:58','updated_at' => '2024-09-10 18:23:58'),
            array('id' => '19','title' => '1 custom asset','category_id' => '2','created_at' => '2024-09-10 18:24:18','updated_at' => '2024-09-10 18:24:18'),
            array('id' => '20','title' => 'Responsive design','category_id' => '2','created_at' => '2024-09-10 18:24:27','updated_at' => '2024-09-10 18:24:27'),
            array('id' => '21','title' => 'Wireframes','category_id' => '2','created_at' => '2024-09-10 18:24:35','updated_at' => '2024-09-10 18:24:35'),
            array('id' => '22','title' => 'Include source file','category_id' => '2','created_at' => '2024-09-10 18:24:45','updated_at' => '2024-09-10 18:24:45'),
            array('id' => '23','title' => 'Prototype','category_id' => '2','created_at' => '2024-09-10 18:45:25','updated_at' => '2024-09-10 18:45:25'),
            array('id' => '24','title' => 'One Time Delivery','category_id' => '2','created_at' => '2024-09-10 18:45:44','updated_at' => '2024-09-10 18:45:44')
          );

          Feature::insert($features);
    }
}
