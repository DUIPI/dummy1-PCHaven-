<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class MoboResource extends JsonResource
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
      'name' => $this->name,
      'socket' => $this->socket,
      'sockets_info' => new AdminMoboResource($this->sockets_info),
      'hemjee' => $this->hemjee,
      'memory_max' => $this->memory_max,
      'memory_slot' => $this->memory_slot,
      'color' => $this->color,
      'price' => $this->price,
      'image' => $this->image ? Storage::url($this->image) : ''
    ];
  }
}
