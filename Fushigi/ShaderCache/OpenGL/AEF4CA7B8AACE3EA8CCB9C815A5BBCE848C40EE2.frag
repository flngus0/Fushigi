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

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 0) uniform sampler2D fp_t_tcb_24;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise vec3 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    // 0x000008: 0xE003FF87CFF7FF01 Ipa
    // 0x000010: 0x5080000000470101 Mufu
    // 0x000018: 0xE043FF8A0017FF00 Ipa
    temp_0 = in_attr2.x;
    // 0x000028: 0xE043FF8A4017FF02 Ipa
    temp_1 = in_attr2.y;
    // 0x000030: 0xD822024000270002 Texs
    temp_2 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyz;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    temp_5 = temp_2.z;
    // 0x000038: 0xE043FF880017FF06 Ipa
    temp_6 = in_attr0.x;
    // 0x000048: 0xE043FF884017FF08 Ipa
    temp_7 = in_attr0.y;
    // 0x000050: 0xE043FF888017FF07 Ipa
    temp_8 = in_attr0.z;
    // 0x000058: 0xE043FF898017FF09 Ipa
    temp_9 = in_attr1.z;
    // 0x000068: 0x4C68101402C70204 Fmul
    temp_10 = temp_3 * fp_c5.data[11].x;
    // 0x000070: 0x4C68101402D70303 Fmul
    temp_11 = temp_4 * fp_c5.data[11].y;
    // 0x000078: 0x4C68101402E70005 Fmul
    temp_12 = temp_5 * fp_c5.data[11].z;
    // 0x000088: 0x5C68100000670406 Fmul
    temp_13 = temp_10 * temp_6;
    // 0x000090: 0x5C68100000870308 Fmul
    temp_14 = temp_11 * temp_7;
    // 0x000098: 0x5C68100000770507 Fmul
    temp_15 = temp_12 * temp_8;
    // 0x0000A8: 0x4C58100C03870904 Fadd
    temp_16 = temp_9 + fp_c3.data[14].x;
    // 0x0000B0: 0x0103F8000007F003 Mov32i
    // 0x0000B8: 0x0103F6000007F005 Mov32i
    // 0x0000C8: 0x4C68101801470600 Fmul
    temp_17 = temp_13 * fp_c6.data[5].x;
    // 0x0000D0: 0x4C68101801570801 Fmul
    temp_18 = temp_14 * fp_c6.data[5].y;
    // 0x0000D8: 0x4C68101801670702 Fmul
    temp_19 = temp_15 * fp_c6.data[5].z;
    // 0x0000E8: 0x5C9807800FF70006 Mov
    // 0x0000F0: 0x0103F8000007F007 Mov32i
    // 0x0000F8: 0x49A37F8C03C70404 Ffma
    temp_20 = 0.0 - fp_c3.data[15].x;
    temp_21 = fma(temp_16, temp_20, -0.0);
    // 0x000108: 0x4C68101406C70000 Fmul
    temp_22 = temp_17 * fp_c5.data[27].x;
    // 0x000110: 0x4C68101406C70101 Fmul
    temp_23 = temp_18 * fp_c5.data[27].x;
    // 0x000118: 0x4C68101406C70202 Fmul
    temp_24 = temp_19 * fp_c5.data[27].x;
    // 0x000128: 0xE30000000007000F Exit
    out_attr0.x = temp_22;
    out_attr0.y = temp_23;
    out_attr0.z = temp_24;
    out_attr0.w = 1.0;
    out_attr1.x = temp_21;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
