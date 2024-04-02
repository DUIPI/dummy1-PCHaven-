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
        Schema::create('product_cpus', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('p_cpu_name')->strip_tags();
            $table->tinyInteger('core_count');
            $table->float('core_clock');
            $table->float('boost_clock')->nullable();
            $table->smallInteger('tdp')->nullable();
            $table->string('int_graphics')->nullable()->strip_tags();
            $table->integer('p_cpu_price');
            $table->text('cpu_tailbar')->nullable()->strip_tags();
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_cpus');
    }
};
