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
        Schema::create('service_features', function (Blueprint $table) {
            $table->id();
            $table->foreignId('feature_id')->constrained('features')->onDelete('cascade');
            $table->foreignId('service_id')->constrained('services')->onDelete('cascade');
            $table->string('basic')->default(false);
            $table->string('standard')->default(false);
            $table->string('premium')->default(false);
            $table->boolean('is_additional')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service_features');
    }
};
