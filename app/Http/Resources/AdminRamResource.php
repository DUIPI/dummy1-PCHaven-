<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AdminRamResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    return [
      'id'=>$this->id,
      'memory_gen'=>$this->memory_gen,
      'mem_socket' => $this->mem_socket,
      'mem_socket1' => $this->mem_socket1,
      'mem_socket2' => $this->mem_socket2,
      'mem_socket3' => $this->mem_socket3,
    ];
  }
}
