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
        Schema::create('product_coolers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('cooler_name')->strip_tags();
            $table->smallInteger('fan_rpm')->nullable();
            $table->float('noice_lvl')->nullable();
            $table->string('cooler_color')->strip_tags();
            $table->smallInteger('cooler_size')->nullable();
            $table->integer('cooler_price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_coolers');
    }
};
