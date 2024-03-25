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
        Schema::table('product_cpus', function (Blueprint $table) {
          $table->after('user_id', function($table){
            $table->string('cpu_image')->nullable();
          });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('product_cpus', function (Blueprint $table) {
            $table->dropColumn('cpu_image');
        });
    }
};
