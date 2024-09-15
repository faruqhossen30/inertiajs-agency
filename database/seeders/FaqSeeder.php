<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faqs = array(
            array('id' => '1', 'title' => 'How do we design your website?', 'description' => 'First, we talk about what you want your website to do. Then, we make a plan to help you reach your goals. We decide which pages your site needs and how they should fit together. Next, we draw simple sketches of each page. Once the layout looks good, we start building your website. We test it to make sure everything works. Finally, we show you how to take care of your website and keep it updated.', 'status' => '1', 'created_at' => '2024-09-10 16:53:04', 'updated_at' => '2024-09-10 16:53:04'),
            array('id' => '2', 'title' => 'What types of businesses do we help?', 'description' => 'We help many different kinds of businesses. We take the time to understand your business. Here are some types of businesses we often work with (but not just these): Government, Corporate company website design, Small business website, NGO website, eCommerce development, Educational website development, Personal Portfolio, Schools & Institutions, Medical & Healthcare, Real Estate, Hotel & Restaurants, Travel & Transportation', 'status' => '1', 'created_at' => '2024-09-10 16:54:13', 'updated_at' => '2024-09-10 16:54:13'),
            array('id' => '3', 'title' => 'How much does a new website cost?', 'description' => 'The cost of a new website can change based on things like how fancy the design is, how many pages it has, what features you want, and what you need for your project. Since every website is unique, the price can be different for everyone. At Boost Care IT, we make websites that fit your needs and budget. Our prices are clear and based on the work needed. We aim to offer fair prices while giving you great results.
          You can expect to pay between $250 and $5,000 or more for a custom website, depending on what you need.', 'status' => '1', 'created_at' => '2024-09-10 16:54:41', 'updated_at' => '2024-09-10 16:54:41'),
            array('id' => '4', 'title' => 'Do you make websites that work on all devices?', 'description' => 'Yes, we do! We design websites that look great on any device—whether it’s a desktop, laptop, tablet, or phone. It\'s important to have a website that everyone can use easily, no matter what device they’re on. If you need a website like this for your business, contact us today. We’d love to talk about what you need and create a website that’s just right for you.', 'status' => '1', 'created_at' => '2024-09-10 16:55:03', 'updated_at' => '2024-09-10 16:55:03'),
            array('id' => '5', 'title' => 'Can I update the website myself after it launches?', 'description' => 'Yes, we will show you how to edit your site during a WordPress training session at the end of the project. We\'re here to help you even after your website is up and running. If you need to update content, add new features, or fix any issues, our team is always ready to assist you.', 'status' => '1', 'created_at' => '2024-09-10 16:55:24', 'updated_at' => '2024-09-10 16:55:24'),
            array('id' => '6', 'title' => 'How can you help me make my website better?', 'description' => 'A nice-looking website is just the start. We make sure your site is easy to find on Google by using smart SEO tricks. We\'ll fix up your website’s setup, add the right words, and make your content better. This will help your website show up higher in search results, bringing more visitors to your site. Check out our SEO services to learn more.', 'status' => '1', 'created_at' => '2024-09-10 16:55:40', 'updated_at' => '2024-09-10 16:55:40')
        );

        Faq::insert($faqs);
    }
}
