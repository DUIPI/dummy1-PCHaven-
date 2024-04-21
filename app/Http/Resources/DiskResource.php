<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class DiskResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      'user_id' => $this->user_id,
      'name' => $this->name,
      'capacity' => $this->capacity,
      'type' => $this->type,
      'cache' => $this->cache,
      'interface' => $this->interface,
      'price' => $this->price,
      'image' => $this->image ? Storage::url($this->image) : '',
      'phone' => $this->phone
    ];
  }
}
