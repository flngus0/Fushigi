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

layout (binding = 0) uniform sampler2D fp_t_tcb_30;
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
    // 0x000008: 0x0103F8000007F005 Mov32i
    // 0x000010: 0xE003FF87CFF7FF03 Ipa
    // 0x000018: 0x5080000000470306 Mufu
    // 0x000028: 0xE043FF890067FF00 Ipa
    temp_0 = in_attr1.x;
    // 0x000030: 0xE043FF894067FF01 Ipa
    temp_1 = in_attr1.y;
    // 0x000038: 0xD822030FF0170000 Texs
    temp_2 = texture(fp_t_tcb_30, vec2(temp_0, temp_1)).x;
    // 0x000048: 0xE043FF888067FF04 Ipa
    temp_3 = in_attr0.z;
    // 0x000050: 0x4C98079402C70009 Mov
    // 0x000058: 0x4C98079402D7000A Mov
    // 0x000068: 0x4C98079402E7000C Mov
    // 0x000070: 0x5C9807800FF70006 Mov
    // 0x000078: 0x4C58100C03870404 Fadd
    temp_4 = temp_3 + fp_c3.data[14].x;
    // 0x000088: 0x49A37F8C03C70404 Ffma
    temp_5 = 0.0 - fp_c3.data[15].x;
    temp_6 = fma(temp_4, temp_5, -0.0);
    // 0x000090: 0x32A202C000070002 Ffma
    temp_7 = fma(temp_2, 2.0, -1.0);
    // 0x000098: 0x32A602C000070008 Ffma
    temp_8 = fma(temp_2, 2.0, -1.0);
    temp_9 = clamp(temp_8, 0.0, 1.0);
    // 0x0000A8: 0x5C5970000FF70207 Fadd
    temp_10 = abs(temp_7);
    temp_11 = 0.0 - temp_10;
    temp_12 = temp_11 + -0.0;
    // 0x0000B0: 0x51A0049402C70702 Ffma
    temp_13 = fma(temp_12, fp_c5.data[11].x, fp_c5.data[11].x);
    // 0x0000B8: 0x51A0051402D70703 Ffma
    temp_14 = fma(temp_12, fp_c5.data[11].y, fp_c5.data[11].y);
    // 0x0000C8: 0x51A0061402E70705 Ffma
    temp_15 = fma(temp_12, fp_c5.data[11].z, fp_c5.data[11].z);
    // 0x0000D0: 0x0103F8000007F007 Mov32i
    // 0x0000D8: 0x5C58100000870200 Fadd
    temp_16 = temp_13 + temp_9;
    // 0x0000E8: 0x5C58100000870301 Fadd
    temp_17 = temp_14 + temp_9;
    // 0x0000F0: 0x5C58100000870502 Fadd
    temp_18 = temp_15 + temp_9;
    // 0x0000F8: 0x0103F8000007F003 Mov32i
    // 0x000108: 0x0103EC000007F005 Mov32i
    // 0x000110: 0x4C68101406C70000 Fmul
    temp_19 = temp_16 * fp_c5.data[27].x;
    // 0x000118: 0x4C68101406C70101 Fmul
    temp_20 = temp_17 * fp_c5.data[27].x;
    // 0x000128: 0x4C68101406C70202 Fmul
    temp_21 = temp_18 * fp_c5.data[27].x;
    // 0x000130: 0xE30000000007000F Exit
    out_attr0.x = temp_19;
    out_attr0.y = temp_20;
    out_attr0.z = temp_21;
    out_attr0.w = 1.0;
    out_attr1.x = temp_6;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
