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
    Schema::create('product_mobos', function (Blueprint $table) {
      $table->id();
      $table->foreignId('user_id')->constrained()->cascadeOnDelete();
      $table->string('name');
      $table->foreignId('socket')->references('id')->on('sockets');
      $table->string('hemjee')->nullable();
      $table->smallInteger('memory_max');
      $table->smallInteger('memory_slot');
      $table->string('color');
      $table->integer('price');
      $table->string('image')->nullable();
      $table->integer('phone');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('product_mobos');
  }
};
