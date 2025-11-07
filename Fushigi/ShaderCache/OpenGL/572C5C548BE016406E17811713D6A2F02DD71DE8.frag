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

layout (binding = 0) uniform sampler2D fp_t_tcb_34;
layout (binding = 1) uniform sampler2D fp_t_tcb_24;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise vec3 temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise vec4 temp_8;
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
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    // 0x000008: 0x4C98079406B7000D Mov
    // 0x000010: 0xE003FF87CFF7FF0A Ipa
    // 0x000018: 0x5080000000470A0C Mufu
    // 0x000028: 0xE043FF8AC0C7FF00 Ipa
    temp_0 = in_attr2.w;
    // 0x000030: 0xE043FF8A80C7FF01 Ipa
    temp_1 = in_attr2.z;
    // 0x000038: 0xE043FF8A00C7FF02 Ipa
    temp_2 = in_attr2.x;
    // 0x000048: 0xE043FF8A40C7FF03 Ipa
    temp_3 = in_attr2.y;
    // 0x000050: 0xD822034090070100 Texs
    temp_4 = texture(fp_t_tcb_34, vec2(temp_1, temp_0)).xyz;
    temp_5 = temp_4.x;
    temp_6 = temp_4.y;
    temp_7 = temp_4.z;
    // 0x000058: 0xD832024020370206 Texs
    temp_8 = texture(fp_t_tcb_24, vec2(temp_2, temp_3)).xyzw;
    temp_9 = temp_8.x;
    temp_10 = temp_8.y;
    temp_11 = temp_8.z;
    temp_12 = temp_8.w;
    // 0x000068: 0xE043FF8800C7FF0B Ipa
    temp_13 = in_attr0.x;
    // 0x000070: 0xE043FF8840C7FF08 Ipa
    temp_14 = in_attr0.y;
    // 0x000078: 0xE043FF8880C7FF05 Ipa
    temp_15 = in_attr0.z;
    // 0x000088: 0xE043FF8980C7FF04 Ipa
    temp_16 = in_attr1.z;
    // 0x000090: 0x4C58100C03870404 Fadd
    temp_17 = temp_16 + fp_c3.data[14].x;
    // 0x000098: 0x49A37F8C03C70404 Ffma
    temp_18 = 0.0 - fp_c3.data[15].x;
    temp_19 = fma(temp_17, temp_18, -0.0);
    // 0x0000A8: 0x5C68100000070606 Fmul
    temp_20 = temp_9 * temp_5;
    // 0x0000B0: 0x5C68100000170707 Fmul
    temp_21 = temp_10 * temp_6;
    // 0x0000B8: 0x5C6810000097020A Fmul
    temp_22 = temp_11 * temp_7;
    // 0x0000C8: 0x4C68101809C70D09 Fmul
    temp_23 = fp_c5.data[26].w * fp_c6.data[39].x;
    // 0x0000D0: 0x5C68100000B70606 Fmul
    temp_24 = temp_20 * temp_13;
    // 0x0000D8: 0x5C68100000870707 Fmul
    temp_25 = temp_21 * temp_14;
    // 0x0000E8: 0x5C68100000570A05 Fmul
    temp_26 = temp_22 * temp_15;
    // 0x0000F0: 0x4C68101809E70D08 Fmul
    temp_27 = fp_c5.data[26].w * fp_c6.data[39].z;
    // 0x0000F8: 0x4C68101801470600 Fmul
    temp_28 = temp_24 * fp_c6.data[5].x;
    // 0x000108: 0x4C68101809D70D06 Fmul
    temp_29 = fp_c5.data[26].w * fp_c6.data[39].y;
    // 0x000110: 0x4C68101801570701 Fmul
    temp_30 = temp_25 * fp_c6.data[5].y;
    // 0x000118: 0x4C68101801670502 Fmul
    temp_31 = temp_26 * fp_c6.data[5].z;
    // 0x000128: 0x0103F6000007F005 Mov32i
    // 0x000130: 0x5C98078000370007 Mov
    // 0x000138: 0x5C68100000970000 Fmul
    temp_32 = temp_28 * temp_23;
    // 0x000148: 0x5C68100000670101 Fmul
    temp_33 = temp_30 * temp_29;
    // 0x000150: 0x5C68100000870202 Fmul
    temp_34 = temp_31 * temp_27;
    // 0x000158: 0x5C9807800FF70006 Mov
    // 0x000168: 0x4C68101406C70000 Fmul
    temp_35 = temp_32 * fp_c5.data[27].x;
    // 0x000170: 0x4C68101406C70101 Fmul
    temp_36 = temp_33 * fp_c5.data[27].x;
    // 0x000178: 0x4C68101406C70202 Fmul
    temp_37 = temp_34 * fp_c5.data[27].x;
    // 0x000188: 0xE30000000007000F Exit
    out_attr0.x = temp_35;
    out_attr0.y = temp_36;
    out_attr0.z = temp_37;
    out_attr0.w = temp_12;
    out_attr1.x = temp_19;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = temp_12;
    return;
}
