<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'name',
    'email',
    'password',
  ];

  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = [
    'password',
    'remember_token',
  ];

  /**
   * The attributes that should be cast.
   *
   * @var array<string, string>
   */
  protected $casts = [
    'email_verified_at' => 'datetime',
    'password' => 'hashed',
  ];

  //Admin relationships

  public function userSockets(): HasMany
  {
    return $this->hasMany(Socket::class);
  }

  public function userCPU(): HasMany
  {
    return $this->hasMany(Cpu::class);
  }

  public function userRam(): HasMany
  {
    return $this->hasMany(Memory::class);
  }

  public function userMobo(): HasMany
  {
    return $this->hasMany(MoBo::class);
  }

  //Products relationships
  public function userpCPU(): HasMany
  {
    return $this->hasMany(ProductCpu::class);
  }

  public function userpCooler(): HasMany
  {
    return $this->hasMany(ProductCooler::class);
  }

  public function userpMobo(): HasMany
  {
    return $this->hasMany(ProductMobo::class);
  }

  public function userpDisk(): HasMany
  {
    return $this->hasMany(ProductDisk::class);
  }

  public function userpGpu(): HasMany
  {
    return $this->hasMany(ProductGpu::class);
  }

  public function userpRam(): HasMany
  {
    return $this->hasMany(ProductRam::class);
  }

  public function userpPsu(): HasMany
  {
    return $this->hasMany(ProductPsu::class);
  }

  public function userpCase(): HasMany
  {
    return $this->hasMany(ProductCase::class);
  }
}
