<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->string('thumbnail')->nullable();
            $table->string('short_description',2000)->nullable();
            $table->longText('description')->nullable();
            $table->longText('description_code')->nullable();
            // Price
            $table->integer('basic_price')->nullable();
            $table->integer('standard_price')->nullable();
            $table->integer('premium_price')->nullable();
            // Day
            $table->integer('basic_day')->nullable();
            $table->integer('standard_day')->nullable();
            $table->integer('premium_day')->nullable();
            // Description
            $table->string('basic_description', 1000)->nullable();
            $table->string('standard_description', 1000)->nullable();
            $table->string('premium_description', 1000)->nullable();

            $table->boolean('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
