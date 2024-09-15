<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = array(
            array('id' => '1','name' => 'DEVELOPMENT','slug' => 'development','description' => 'Design websites that attract clients, increase revenue and grow your business. Our mobile-friendly, keyword-optimized sites offer a seamless user experience.','thumbnail' => 'category/rvrDKNe1tQWGMMXhuf4tcbA90STJWjO3VToyANDS.png','user_id' => '1','status' => '1','created_at' => '2024-06-27 22:32:30','updated_at' => '2024-09-04 16:46:41'),
            array('id' => '2','name' => 'GRAPHIC & DESIGN','slug' => 'graphic-design','description' => 'We have been creating awesome designs for years! Our global team makes unique and custom designs just for your business, always putting your needs first.','thumbnail' => 'category/XEZVz5RS2N90VYH5afLKUzQM4DUMC6EU2HoPODU0.png','user_id' => '1','status' => '1','created_at' => '2024-06-27 22:32:41','updated_at' => '2024-09-10 18:23:38'),
            array('id' => '3','name' => 'SEO','slug' => 'seo','description' => 'It helps you reach more people online! Our team uses smart plans to boost your website on search engines, bringing in more visitors and helping you grow your business.','thumbnail' => 'category/EXEYRMv9ftRmTQTpbwghXIYi3yrcfAsmvOv79Fvq.png','user_id' => '1','status' => '1','created_at' => '2024-06-27 22:32:58','updated_at' => '2024-09-04 16:49:04'),
            array('id' => '4','name' => 'CONTENT WRITING','slug' => 'content-writing','description' => 'We offers top-notch content writing to boost your business by driving more traffic. Our high-quality, customer-focused, and SEO-friendly content keeps clients coming back.','thumbnail' => 'category/wLImUhT7hHiHb56quuNMshHTBCpMrH4FMgiifqzL.png','user_id' => '1','status' => '1','created_at' => '2024-06-27 22:33:30','updated_at' => '2024-09-03 16:57:03'),
            array('id' => '5','name' => 'VIDEO & ANIMATION','slug' => 'video-animation','description' => 'At Boost Care IT, we help your brand shine with awesome videos and animations. Our experts worldwide can boost your social media by 8x! Get started today for great results!','thumbnail' => 'category/HQxN4WyEf3h7GvuvaD3d1JI9OzIDfKEtseChju4t.png','user_id' => '1','status' => '1','created_at' => '2024-06-27 22:33:44','updated_at' => '2024-09-04 16:50:23'),
            array('id' => '6','name' => 'E-COMMERCE','slug' => 'e-commerce','description' => 'Boost your business with our agency, the top e-commerce service! Our expert team helps you grow with great website design and support. Start winning today!','thumbnail' => 'category/WDigg6a5r7P2zjcj66dU8OKfBLAGH1UPRPFPEzEb.png','user_id' => '1','status' => '1','created_at' => '2024-08-23 09:01:27','updated_at' => '2024-09-04 16:51:58'),
            array('id' => '7','name' => 'DIGITAL MARKETING','slug' => 'digital-marketing','description' => 'We helps your business grow with smart digital marketing. We offer expert SEO, ads management, and link-building. Our goal is to make your business shine and earn more.','thumbnail' => 'category/r2r7PpnpED2RRuRIMZcp1GStWTxSNU12QFqt3plX.png','user_id' => '1','status' => '1','created_at' => '2024-08-23 09:01:42','updated_at' => '2024-09-03 16:58:05'),
            array('id' => '8','name' => 'BUSINESS CONSULTANT','slug' => 'business-consultant','description' => 'Boost Care IT helps your business shine with smart advice from expert consultants. Our services guide you to new opportunities and boost your business performance.','thumbnail' => 'category/giinb5P26XdXt9LQ4lQKCAaoSbz3kIEu5nrgHacG.png','user_id' => '1','status' => '1','created_at' => '2024-08-23 09:01:55','updated_at' => '2024-09-04 16:55:12')
          );
          Category::insert($categories);
    }
}
