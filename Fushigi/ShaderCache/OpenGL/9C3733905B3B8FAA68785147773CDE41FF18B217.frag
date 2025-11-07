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

layout (binding = 8, std140) uniform _fp_c7
{
    precise vec4 data[4096];
} fp_c7;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 0) uniform sampler2D fp_t_tcb_30;
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
    precise float temp_4;
    precise float temp_5;
    precise vec3 temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise vec3 temp_12;
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
    // 0x000008: 0x4C98079C23070003 Mov
    // 0x000010: 0xE003FF87CFF7FF00 Ipa
    // 0x000018: 0x5080000000470000 Mufu
    // 0x000028: 0xE043FF8A4007FF04 Ipa
    temp_0 = in_attr2.y;
    // 0x000030: 0xE043FF8A0007FF05 Ipa
    temp_1 = in_attr2.x;
    // 0x000038: 0x0883ECCCCCD70401 Fadd32i
    temp_2 = temp_0 + 0.400000006;
    // 0x000048: 0x0883E4CCCCD70502 Fadd32i
    temp_3 = temp_1 + 0.200000003;
    // 0x000050: 0x49A0021406970304 Ffma
    temp_4 = fma(fp_c7.data[140].x, fp_c5.data[26].y, temp_0);
    // 0x000058: 0x49A0029406870305 Ffma
    temp_5 = fma(fp_c7.data[140].x, fp_c5.data[26].x, temp_1);
    // 0x000068: 0xD8220300A0470504 Texs
    temp_6 = texture(fp_t_tcb_30, vec2(temp_5, temp_4)).xyz;
    temp_7 = temp_6.x;
    temp_8 = temp_6.y;
    temp_9 = temp_6.z;
    // 0x000070: 0x49A0009406770301 Ffma
    temp_10 = fma(fp_c7.data[140].x, fp_c5.data[25].w, temp_2);
    // 0x000078: 0x49A0011406670302 Ffma
    temp_11 = fma(fp_c7.data[140].x, fp_c5.data[25].z, temp_3);
    // 0x000088: 0xD822030010170206 Texs
    temp_12 = texture(fp_t_tcb_30, vec2(temp_11, temp_10)).xyz;
    temp_13 = temp_12.x;
    temp_14 = temp_12.y;
    temp_15 = temp_12.z;
    // 0x000090: 0xE043FF880007FF0B Ipa
    temp_16 = in_attr0.x;
    // 0x000098: 0xE043FF884007FF0C Ipa
    temp_17 = in_attr0.y;
    // 0x0000A8: 0xE043FF888007FF09 Ipa
    temp_18 = in_attr0.z;
    // 0x0000B0: 0xE043FF898007FF08 Ipa
    temp_19 = in_attr1.z;
    // 0x0000B8: 0xE043FF88C007FF03 Ipa
    temp_20 = in_attr0.w;
    // 0x0000C8: 0x5C68100000470606 Fmul
    temp_21 = temp_13 * temp_7;
    // 0x0000D0: 0x5C68100000570707 Fmul
    temp_22 = temp_14 * temp_8;
    // 0x0000D8: 0x5C68100000A7010A Fmul
    temp_23 = temp_15 * temp_9;
    // 0x0000E8: 0x4C58100C03870804 Fadd
    temp_24 = temp_19 + fp_c3.data[14].x;
    // 0x0000F0: 0x0103EC000007F005 Mov32i
    // 0x0000F8: 0x5C68100000B70606 Fmul
    temp_25 = temp_21 * temp_16;
    // 0x000108: 0x5C68100000C70707 Fmul
    temp_26 = temp_22 * temp_17;
    // 0x000110: 0x5C68100000970A09 Fmul
    temp_27 = temp_23 * temp_18;
    // 0x000118: 0x49A37F8C03C70404 Ffma
    temp_28 = 0.0 - fp_c3.data[15].x;
    temp_29 = fma(temp_24, temp_28, -0.0);
    // 0x000128: 0x4C68101402C70601 Fmul
    temp_30 = temp_25 * fp_c5.data[11].x;
    // 0x000130: 0x4C68101402D70702 Fmul
    temp_31 = temp_26 * fp_c5.data[11].y;
    // 0x000138: 0x4C68101402E70908 Fmul
    temp_32 = temp_27 * fp_c5.data[11].z;
    // 0x000148: 0x5C9807800FF70006 Mov
    // 0x000150: 0x5C98078000370007 Mov
    // 0x000158: 0x4C68101406C70100 Fmul
    temp_33 = temp_30 * fp_c5.data[27].x;
    // 0x000168: 0x4C68101406C70201 Fmul
    temp_34 = temp_31 * fp_c5.data[27].x;
    // 0x000170: 0x4C68101406C70802 Fmul
    temp_35 = temp_32 * fp_c5.data[27].x;
    // 0x000178: 0xE30000000007000F Exit
    out_attr0.x = temp_33;
    out_attr0.y = temp_34;
    out_attr0.z = temp_35;
    out_attr0.w = temp_20;
    out_attr1.x = temp_29;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = temp_20;
    return;
}
