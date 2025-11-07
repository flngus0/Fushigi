#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    // 0x000008: 0x0103F4000007F005 Mov32i
    // 0x000010: 0xE003FF87CFF7FF07 Ipa
    // 0x000018: 0x5C9807800FF70006 Mov
    // 0x000028: 0x5080000000470708 Mufu
    // 0x000030: 0xE043FF898087FF04 Ipa
    temp_0 = in_attr1.z;
    // 0x000038: 0xE043FF880087FF00 Ipa
    temp_1 = in_attr0.x;
    // 0x000048: 0xE043FF884087FF01 Ipa
    temp_2 = in_attr0.y;
    // 0x000050: 0xE043FF888087FF02 Ipa
    temp_3 = in_attr0.z;
    // 0x000058: 0xE043FF88C087FF03 Ipa
    temp_4 = in_attr0.w;
    // 0x000068: 0x4C58100C03870404 Fadd
    temp_5 = temp_0 + fp_c3.data[14].x;
    // 0x000070: 0x4C68101406C70000 Fmul
    temp_6 = temp_1 * fp_c5.data[27].x;
    // 0x000078: 0x4C68101406C70101 Fmul
    temp_7 = temp_2 * fp_c5.data[27].x;
    // 0x000088: 0x4C68101406C70202 Fmul
    temp_8 = temp_3 * fp_c5.data[27].x;
    // 0x000090: 0x5C98078000370007 Mov
    // 0x000098: 0x49A37F8C03C70404 Ffma
    temp_9 = 0.0 - fp_c3.data[15].x;
    temp_10 = fma(temp_5, temp_9, -0.0);
    // 0x0000A8: 0xE30000000007000F Exit
    out_attr0.x = temp_6;
    out_attr0.y = temp_7;
    out_attr0.z = temp_8;
    out_attr0.w = temp_4;
    out_attr1.x = temp_10;
    out_attr1.y = 0.75;
    out_attr1.z = 0.0;
    out_attr1.w = temp_4;
    return;
}
