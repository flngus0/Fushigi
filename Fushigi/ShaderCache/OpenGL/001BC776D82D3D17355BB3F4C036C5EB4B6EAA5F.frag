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

layout (binding = 8, std140) uniform _fp_c7
{
    precise vec4 data[4096];
} fp_c7;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 0) uniform sampler2D fp_t_tcb_24;
layout (binding = 1) uniform sampler2D fp_t_tcb_20;
layout (binding = 2) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;

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
    bool temp_18;
    precise vec3 temp_19;
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
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    // 0x000008: 0x4C98079C0207000F Mov
    // 0x000010: 0xE003FF87CFF7FF00 Ipa
    // 0x000018: 0x5080000000470000 Mufu
    // 0x000028: 0xE043FF890007FF01 Ipa
    temp_0 = in_attr1.x;
    // 0x000030: 0xE043FF894007FF02 Ipa
    temp_1 = in_attr1.y;
    // 0x000038: 0xD832024060270102 Texs
    temp_2 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyzw;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    temp_5 = temp_2.z;
    temp_6 = temp_2.w;
    // 0x000048: 0xE003FF870FF7FF04 Ipa
    temp_7 = gl_FragCoord.x;
    temp_8 = support_buffer.render_scale[0];
    temp_9 = temp_7 / temp_8;
    // 0x000050: 0xE003FF874FF7FF05 Ipa
    temp_10 = gl_FragCoord.y;
    temp_11 = support_buffer.render_scale[0];
    temp_12 = temp_10 / temp_11;
    // 0x000058: 0x4C68100C04A70404 Fmul
    temp_13 = temp_9 * fp_c3.data[18].z;
    // 0x000068: 0xE043FF8B0007FF08 Ipa
    temp_14 = in_attr3.x;
    // 0x000070: 0x4C68100C04B70505 Fmul
    temp_15 = temp_12 * fp_c3.data[18].w;
    // 0x000078: 0xE043FF8B4007FF09 Ipa
    temp_16 = in_attr3.y;
    // 0x000088: 0x4C9807980B47000E Mov
    // 0x000090: 0xE043FF8B8007FF0A Ipa
    temp_17 = in_attr3.z;
    // 0x000098: 0x4BB1839406070707 Fsetp
    temp_18 = temp_6 < fp_c5.data[24].x;
    // 0x0000A8: 0xE33000000000000F Kil
    if (temp_18)
    {
        discard;
    }
    // 0x0000B0: 0xD8220200B0570404 Texs
    temp_19 = texture(fp_t_tcb_20, vec2(temp_13, temp_15)).xyz;
    temp_20 = temp_19.x;
    temp_21 = temp_19.y;
    temp_22 = temp_19.z;
    // 0x0000B8: 0xDEBA0000C0F70808 TexB
    temp_23 = texture(fp_t_cb7_20, vec3(temp_14, temp_16, temp_17)).x;
    // 0x0000C8: 0x4C68101C23270201 Fmul
    temp_24 = temp_3 * fp_c7.data[140].z;
    // 0x0000D0: 0x4C9807980287000D Mov
    // 0x0000D8: 0x49A0011406C70102 Ffma
    temp_25 = fma(temp_24, fp_c5.data[27].x, temp_3);
    // 0x0000E8: 0x4C68101C23270301 Fmul
    temp_26 = temp_4 * fp_c7.data[140].z;
    // 0x0000F0: 0x49A0019406C70101 Ffma
    temp_27 = fma(temp_26, fp_c5.data[27].x, temp_4);
    // 0x0000F8: 0x010404000007F00A Mov32i
    // 0x000108: 0xF0F0000034170000 Depbar
    // 0x000110: 0x51A207180B470503 Ffma
    temp_28 = 0.0 - fp_c6.data[45].x;
    temp_29 = fma(temp_21, fp_c6.data[45].x, temp_28);
    // 0x000118: 0xE04BFF8A4007FF05 Ipa
    temp_30 = in_attr2.y;
    temp_31 = clamp(temp_30, 0.0, 1.0);
    // 0x000128: 0x51A207180B47040C Ffma
    temp_32 = 0.0 - fp_c6.data[45].x;
    temp_33 = fma(temp_20, fp_c6.data[45].x, temp_32);
    // 0x000130: 0x4C98079802970004 Mov
    // 0x000138: 0x51A207180B470B0B Ffma
    temp_34 = 0.0 - fp_c6.data[45].x;
    temp_35 = fma(temp_22, fp_c6.data[45].x, temp_34);
    // 0x000148: 0x51A0069802870C0C Ffma
    temp_36 = fma(temp_33, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x000150: 0x51A0021802970304 Ffma
    temp_37 = fma(temp_29, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000158: 0x5C58300000C70203 Fadd
    temp_38 = 0.0 - temp_36;
    temp_39 = temp_25 + temp_38;
    // 0x000168: 0x49A006180BF70303 Ffma
    temp_40 = fma(temp_39, fp_c6.data[47].w, temp_36);
    // 0x000170: 0x5C60178000370C03 Fmnmx
    temp_41 = max(temp_36, temp_40);
    // 0x000178: 0x33A0054000070509 Ffma
    temp_42 = fma(temp_31, -2.0, 3.0);
    // 0x000188: 0x5C6810000057050A Fmul
    temp_43 = temp_31 * temp_31;
    // 0x000190: 0x5C68100000A70909 Fmul
    temp_44 = temp_42 * temp_43;
    // 0x000198: 0x4C68101803770909 Fmul
    temp_45 = temp_44 * fp_c6.data[13].w;
    // 0x0001A8: 0x49A2049803470905 Ffma
    temp_46 = 0.0 - temp_45;
    temp_47 = fma(temp_45, fp_c6.data[13].x, temp_46);
    // 0x0001B0: 0x59A0018000570305 Ffma
    temp_48 = fma(temp_41, temp_47, temp_41);
    // 0x0001B8: 0xE043FF8A0007FF03 Ipa
    temp_49 = in_attr2.x;
    // 0x0001C8: 0x49A501980BC7080A Ffma
    temp_50 = 0.0 - fp_c6.data[47].x;
    temp_51 = fma(temp_23, temp_50, temp_49);
    temp_52 = clamp(temp_51, 0.0, 1.0);
    // 0x0001D0: 0x4C68101C23270603 Fmul
    temp_53 = temp_5 * fp_c7.data[140].z;
    // 0x0001D8: 0x5080000000370A0A Mufu
    temp_54 = log2(temp_52);
    // 0x0001E8: 0x4C98079802A70008 Mov
    // 0x0001F0: 0x49A0031406C70303 Ffma
    temp_55 = fma(temp_53, fp_c5.data[27].x, temp_5);
    // 0x0001F8: 0x51A0041802A70B06 Ffma
    temp_56 = fma(temp_35, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000208: 0xE043FF888007FF08 Ipa
    temp_57 = in_attr0.z;
    // 0x000210: 0x5C5830000047010B Fadd
    temp_58 = 0.0 - temp_37;
    temp_59 = temp_27 + temp_58;
    // 0x000218: 0x5C5830000067030C Fadd
    temp_60 = 0.0 - temp_56;
    temp_61 = temp_55 + temp_60;
    // 0x000228: 0x4C68101803170A0D Fmul
    temp_62 = temp_54 * fp_c6.data[12].y;
    // 0x000230: 0x49A002180BF70B0B Ffma
    temp_63 = fma(temp_59, fp_c6.data[47].w, temp_37);
    // 0x000238: 0x5C59100000570200 Fadd
    temp_64 = 0.0 - temp_25;
    temp_65 = temp_64 + temp_48;
    // 0x000248: 0x49A003180BF70C0C Ffma
    temp_66 = fma(temp_61, fp_c6.data[47].w, temp_56);
    // 0x000250: 0x5C90008000D7000D Rro
    // 0x000258: 0x5C60178000B7040B Fmnmx
    temp_67 = max(temp_37, temp_63);
    // 0x000268: 0x5080000000270D0A Mufu
    temp_68 = exp2(temp_62);
    // 0x000270: 0x49A2049803570904 Ffma
    temp_69 = 0.0 - temp_45;
    temp_70 = fma(temp_45, fp_c6.data[13].y, temp_69);
    // 0x000278: 0x49A2049803670909 Ffma
    temp_71 = 0.0 - temp_45;
    temp_72 = fma(temp_45, fp_c6.data[13].z, temp_71);
    // 0x000288: 0x5C60178000C7060C Fmnmx
    temp_73 = max(temp_56, temp_66);
    // 0x000290: 0x59A0058000470B04 Ffma
    temp_74 = fma(temp_67, temp_70, temp_67);
    // 0x000298: 0x59A0060000970C09 Ffma
    temp_75 = fma(temp_73, temp_72, temp_73);
    // 0x0002A8: 0x4C68101802B70A06 Fmul
    temp_76 = temp_68 * fp_c6.data[10].w;
    // 0x0002B0: 0x5C59100000470104 Fadd
    temp_77 = 0.0 - temp_27;
    temp_78 = temp_77 + temp_74;
    // 0x0002B8: 0x4C58100C03870808 Fadd
    temp_79 = temp_57 + fp_c3.data[14].x;
    // 0x0002C8: 0x5C59100000970305 Fadd
    temp_80 = 0.0 - temp_55;
    temp_81 = temp_80 + temp_75;
    // 0x0002D0: 0x59A0010000670000 Ffma
    temp_82 = fma(temp_65, temp_76, temp_25);
    // 0x0002D8: 0x59A0008000670401 Ffma
    temp_83 = fma(temp_78, temp_76, temp_27);
    // 0x0002E8: 0x49A37F8C03C70804 Ffma
    temp_84 = 0.0 - fp_c3.data[15].x;
    temp_85 = fma(temp_79, temp_84, -0.0);
    // 0x0002F0: 0x59A0018000670502 Ffma
    temp_86 = fma(temp_81, temp_76, temp_55);
    // 0x0002F8: 0x0103F6000007F005 Mov32i
    // 0x000308: 0x5C9807800FF70006 Mov
    // 0x000310: 0x5C98078000770003 Mov
    // 0x000318: 0xE30000000007000F Exit
    out_attr0.x = temp_82;
    out_attr0.y = temp_83;
    out_attr0.z = temp_86;
    out_attr0.w = temp_6;
    out_attr1.x = temp_85;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = temp_6;
    return;
}
