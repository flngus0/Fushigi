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
    precise vec4 temp_2;
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
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    // 0x000008: 0x4C98079406B7000A Mov
    // 0x000010: 0xE003FF87CFF7FF09 Ipa
    // 0x000018: 0x5080000000470909 Mufu
    // 0x000028: 0xE043FF8A0097FF02 Ipa
    temp_0 = in_attr2.x;
    // 0x000030: 0xE043FF8A4097FF03 Ipa
    temp_1 = in_attr2.y;
    // 0x000038: 0xD832024020370200 Texs
    temp_2 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyzw;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    temp_5 = temp_2.z;
    temp_6 = temp_2.w;
    // 0x000048: 0xE043FF880097FF06 Ipa
    temp_7 = in_attr0.x;
    // 0x000050: 0xE043FF884097FF07 Ipa
    temp_8 = in_attr0.y;
    // 0x000058: 0xE043FF888097FF08 Ipa
    temp_9 = in_attr0.z;
    // 0x000068: 0xE043FF898097FF04 Ipa
    temp_10 = in_attr1.z;
    // 0x000070: 0x4C58100C03870404 Fadd
    temp_11 = temp_10 + fp_c3.data[14].x;
    // 0x000078: 0x49A37F8C03C70404 Ffma
    temp_12 = 0.0 - fp_c3.data[15].x;
    temp_13 = fma(temp_11, temp_12, -0.0);
    // 0x000088: 0x4C68101402C70000 Fmul
    temp_14 = temp_3 * fp_c5.data[11].x;
    // 0x000090: 0x4C68101402D70101 Fmul
    temp_15 = temp_4 * fp_c5.data[11].y;
    // 0x000098: 0x4C68101402E70205 Fmul
    temp_16 = temp_5 * fp_c5.data[11].z;
    // 0x0000A8: 0x5C68100000670000 Fmul
    temp_17 = temp_14 * temp_7;
    // 0x0000B0: 0x5C68100000770101 Fmul
    temp_18 = temp_15 * temp_8;
    // 0x0000B8: 0x5C68100000870505 Fmul
    temp_19 = temp_16 * temp_9;
    // 0x0000C8: 0x4C68101809C70A06 Fmul
    temp_20 = fp_c5.data[26].w * fp_c6.data[39].x;
    // 0x0000D0: 0x4C68101809D70A07 Fmul
    temp_21 = fp_c5.data[26].w * fp_c6.data[39].y;
    // 0x0000D8: 0x4C68101809E70A08 Fmul
    temp_22 = fp_c5.data[26].w * fp_c6.data[39].z;
    // 0x0000E8: 0x4C68101801470000 Fmul
    temp_23 = temp_17 * fp_c6.data[5].x;
    // 0x0000F0: 0x4C68101801570101 Fmul
    temp_24 = temp_18 * fp_c6.data[5].y;
    // 0x0000F8: 0x4C68101801670502 Fmul
    temp_25 = temp_19 * fp_c6.data[5].z;
    // 0x000108: 0x0103F6000007F005 Mov32i
    // 0x000110: 0x5C68100000670000 Fmul
    temp_26 = temp_23 * temp_20;
    // 0x000118: 0x5C68100000770101 Fmul
    temp_27 = temp_24 * temp_21;
    // 0x000128: 0x5C68100000870202 Fmul
    temp_28 = temp_25 * temp_22;
    // 0x000130: 0x5C9807800FF70006 Mov
    // 0x000138: 0x5C98078000370007 Mov
    // 0x000148: 0x4C68101406C70000 Fmul
    temp_29 = temp_26 * fp_c5.data[27].x;
    // 0x000150: 0x4C68101406C70101 Fmul
    temp_30 = temp_27 * fp_c5.data[27].x;
    // 0x000158: 0x4C68101406C70202 Fmul
    temp_31 = temp_28 * fp_c5.data[27].x;
    // 0x000168: 0xE30000000007000F Exit
    out_attr0.x = temp_29;
    out_attr0.y = temp_30;
    out_attr0.z = temp_31;
    out_attr0.w = temp_6;
    out_attr1.x = temp_13;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = temp_6;
    return;
}
