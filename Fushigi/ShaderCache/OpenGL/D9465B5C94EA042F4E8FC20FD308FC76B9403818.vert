#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
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

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 9, std140) uniform _vp_c8
{
    precise vec4 data[4096];
} vp_c8;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (location = 0) in vec4 in_attr0;
layout (location = 6) in vec4 in_attr6;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    int temp_7;
    uint temp_8;
    uint temp_9;
    int temp_10;
    precise float temp_11;
    int temp_12;
    uint temp_13;
    int temp_14;
    precise float temp_15;
    int temp_16;
    uint temp_17;
    uint temp_18;
    int temp_19;
    precise float temp_20;
    int temp_21;
    uint temp_22;
    int temp_23;
    precise float temp_24;
    int temp_25;
    uint temp_26;
    uint temp_27;
    int temp_28;
    precise float temp_29;
    int temp_30;
    int temp_31;
    int temp_32;
    uint temp_33;
    int temp_34;
    int temp_35;
    int temp_36;
    int temp_37;
    uint temp_38;
    uint temp_39;
    int temp_40;
    precise float temp_41;
    int temp_42;
    uint temp_43;
    int temp_44;
    precise float temp_45;
    uint temp_46;
    uint temp_47;
    int temp_48;
    precise float temp_49;
    int temp_50;
    uint temp_51;
    int temp_52;
    precise float temp_53;
    int temp_54;
    uint temp_55;
    uint temp_56;
    int temp_57;
    precise float temp_58;
    int temp_59;
    uint temp_60;
    int temp_61;
    precise float temp_62;
    int temp_63;
    uint temp_64;
    uint temp_65;
    int temp_66;
    precise float temp_67;
    int temp_68;
    uint temp_69;
    int temp_70;
    precise float temp_71;
    int temp_72;
    uint temp_73;
    uint temp_74;
    int temp_75;
    precise float temp_76;
    int temp_77;
    uint temp_78;
    int temp_79;
    precise float temp_80;
    int temp_81;
    uint temp_82;
    uint temp_83;
    int temp_84;
    precise float temp_85;
    int temp_86;
    uint temp_87;
    int temp_88;
    precise float temp_89;
    precise float temp_90;
    int temp_91;
    uint temp_92;
    uint temp_93;
    int temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x010000000107F011 Mov32i
    // 0x000010: 0xEFD87F800E07FF00 Ald
    temp_0 = in_attr6.x;
    // 0x000018: 0x4CB0119002371A02 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0xEFD87F800807FF15 Ald
    temp_3 = in_attr0.x;
    // 0x000030: 0xEFD87F800847FF14 Ald
    temp_4 = in_attr0.y;
    // 0x000038: 0xEFD87F800887FF19 Ald
    temp_5 = in_attr0.z;
    // 0x000048: 0x3848000000470213 Shl
    temp_6 = temp_2 << 4;
    // 0x000050: 0xEF95007068071302 Ldc
    temp_7 = temp_6 + 0x680;
    temp_8 = uint(temp_7) >> 2;
    temp_9 = temp_8 >> 2;
    temp_10 = int(temp_8) & 3;
    temp_11 = vp_c7.data[int(temp_9)][temp_10];
    temp_12 = int(temp_8) + 1;
    temp_13 = uint(temp_12) >> 2;
    temp_14 = temp_12 & 3;
    temp_15 = vp_c7.data[int(temp_13)][temp_14];
    // 0x000058: 0xEF95007048071304 Ldc
    temp_16 = temp_6 + 0x480;
    temp_17 = uint(temp_16) >> 2;
    temp_18 = temp_17 >> 2;
    temp_19 = int(temp_17) & 3;
    temp_20 = vp_c7.data[int(temp_18)][temp_19];
    temp_21 = int(temp_17) + 1;
    temp_22 = uint(temp_21) >> 2;
    temp_23 = temp_21 & 3;
    temp_24 = vp_c7.data[int(temp_22)][temp_23];
    // 0x000068: 0xEF94007048871310 Ldc
    temp_25 = temp_6 + 0x488;
    temp_26 = uint(temp_25) >> 2;
    temp_27 = temp_26 >> 2;
    temp_28 = int(temp_26) & 3;
    temp_29 = vp_c7.data[int(temp_27)][temp_28];
    // 0x000070: 0x3600088003070011 Xmad
    temp_30 = floatBitsToInt(temp_0) & 0xFFFF;
    temp_31 = temp_30 * 48;
    temp_32 = temp_31 + 16;
    // 0x000078: 0x3620089003070011 Xmad
    temp_33 = floatBitsToUint(temp_0) >> 16;
    temp_34 = int(temp_33) * 48;
    temp_35 = temp_34 << 16;
    temp_36 = temp_35 + temp_32;
    // 0x000088: 0xEF95008FFF07110E Ldc
    temp_37 = temp_36 + -16;
    temp_38 = uint(temp_37) >> 2;
    temp_39 = temp_38 >> 2;
    temp_40 = int(temp_38) & 3;
    temp_41 = vp_c8.data[int(temp_39)][temp_40];
    temp_42 = int(temp_38) + 1;
    temp_43 = uint(temp_42) >> 2;
    temp_44 = temp_42 & 3;
    temp_45 = vp_c8.data[int(temp_43)][temp_44];
    // 0x000090: 0xEF9500800007110C Ldc
    temp_46 = uint(temp_36) >> 2;
    temp_47 = temp_46 >> 2;
    temp_48 = int(temp_46) & 3;
    temp_49 = vp_c8.data[int(temp_47)][temp_48];
    temp_50 = int(temp_46) + 1;
    temp_51 = uint(temp_50) >> 2;
    temp_52 = temp_50 & 3;
    temp_53 = vp_c8.data[int(temp_51)][temp_52];
    // 0x000098: 0xEF9500800107110A Ldc
    temp_54 = temp_36 + 16;
    temp_55 = uint(temp_54) >> 2;
    temp_56 = temp_55 >> 2;
    temp_57 = int(temp_55) & 3;
    temp_58 = vp_c8.data[int(temp_56)][temp_57];
    temp_59 = int(temp_55) + 1;
    temp_60 = uint(temp_59) >> 2;
    temp_61 = temp_59 & 3;
    temp_62 = vp_c8.data[int(temp_60)][temp_61];
    // 0x0000A8: 0xEF95008FFF871108 Ldc
    temp_63 = temp_36 + -8;
    temp_64 = uint(temp_63) >> 2;
    temp_65 = temp_64 >> 2;
    temp_66 = int(temp_64) & 3;
    temp_67 = vp_c8.data[int(temp_65)][temp_66];
    temp_68 = int(temp_64) + 1;
    temp_69 = uint(temp_68) >> 2;
    temp_70 = temp_68 & 3;
    temp_71 = vp_c8.data[int(temp_69)][temp_70];
    // 0x0000B0: 0xEF95008000871106 Ldc
    temp_72 = temp_36 + 8;
    temp_73 = uint(temp_72) >> 2;
    temp_74 = temp_73 >> 2;
    temp_75 = int(temp_73) & 3;
    temp_76 = vp_c8.data[int(temp_74)][temp_75];
    temp_77 = int(temp_73) + 1;
    temp_78 = uint(temp_77) >> 2;
    temp_79 = temp_77 & 3;
    temp_80 = vp_c8.data[int(temp_78)][temp_79];
    // 0x0000B8: 0xEF95008001871100 Ldc
    temp_81 = temp_36 + 24;
    temp_82 = uint(temp_81) >> 2;
    temp_83 = temp_82 >> 2;
    temp_84 = int(temp_82) & 3;
    temp_85 = vp_c8.data[int(temp_83)][temp_84];
    temp_86 = int(temp_82) + 1;
    temp_87 = uint(temp_86) >> 2;
    temp_88 = temp_86 & 3;
    temp_89 = vp_c8.data[int(temp_87)][temp_88];
    // 0x0000C8: 0x5C68100001570E12 Fmul
    temp_90 = temp_41 * temp_3;
    // 0x0000D0: 0xEF9400706887130E Ldc
    temp_91 = temp_6 + 0x688;
    temp_92 = uint(temp_91) >> 2;
    temp_93 = temp_92 >> 2;
    temp_94 = int(temp_92) & 3;
    temp_95 = vp_c7.data[int(temp_93)][temp_94];
    // 0x0000D8: 0x5C68100001570C0C Fmul
    temp_96 = temp_49 * temp_3;
    // 0x0000E8: 0x5C68100001570A0A Fmul
    temp_97 = temp_58 * temp_3;
    // 0x0000F0: 0x59A0090001470F0F Ffma
    temp_98 = fma(temp_45, temp_4, temp_90);
    // 0x0000F8: 0x59A0060001470D0C Ffma
    temp_99 = fma(temp_53, temp_4, temp_96);
    // 0x000108: 0x59A0050001470B0A Ffma
    temp_100 = fma(temp_62, temp_4, temp_97);
    // 0x000110: 0x59A0078001970808 Ffma
    temp_101 = fma(temp_67, temp_5, temp_98);
    // 0x000118: 0x59A0060001970606 Ffma
    temp_102 = fma(temp_76, temp_5, temp_99);
    // 0x000128: 0x59A0050001970000 Ffma
    temp_103 = fma(temp_85, temp_5, temp_100);
    // 0x000130: 0xEFD87F801007FF0A Ald
    temp_104 = in_attr8.x;
    // 0x000138: 0x5C58100000870909 Fadd
    temp_105 = temp_71 + temp_101;
    // 0x000148: 0xEFD87F801047FF08 Ald
    temp_106 = in_attr8.y;
    // 0x000150: 0x5C58100000670706 Fadd
    temp_107 = temp_80 + temp_102;
    // 0x000158: 0x5C58100000070101 Fadd
    temp_108 = temp_89 + temp_103;
    // 0x000168: 0x4C98079400270007 Mov
    // 0x000170: 0x59A0010000470902 Ffma
    temp_109 = fma(temp_105, temp_20, temp_11);
    // 0x000178: 0x59A0018000570603 Ffma
    temp_110 = fma(temp_107, temp_24, temp_15);
    // 0x000188: 0x59A0070001070101 Ffma
    temp_111 = fma(temp_108, temp_29, temp_95);
    // 0x000190: 0x4C98079400370009 Mov
    // 0x000198: 0x4C68100C00070205 Fmul
    temp_112 = temp_109 * vp_c3.data[0].x;
    // 0x0001A8: 0x4C68100C00470204 Fmul
    temp_113 = temp_109 * vp_c3.data[1].x;
    // 0x0001B0: 0x4C58101002070100 Fadd
    temp_114 = temp_111 + vp_c4.data[8].x;
    // 0x0001B8: 0x49A0028C00170306 Ffma
    temp_115 = fma(temp_110, vp_c3.data[0].y, temp_112);
    // 0x0001C8: 0x4C68100C00870205 Fmul
    temp_116 = temp_109 * vp_c3.data[2].x;
    // 0x0001D0: 0x49A0020C00570302 Ffma
    temp_117 = fma(temp_110, vp_c3.data[1].y, temp_113);
    // 0x0001D8: 0x49A0030C00270006 Ffma
    temp_118 = fma(temp_114, vp_c3.data[0].z, temp_115);
    // 0x0001E8: 0x49A0028C00970303 Ffma
    temp_119 = fma(temp_110, vp_c3.data[2].y, temp_116);
    // 0x0001F0: 0x49A0010C00670002 Ffma
    temp_120 = fma(temp_114, vp_c3.data[1].z, temp_117);
    // 0x0001F8: 0x51A0039400470805 Ffma
    temp_121 = fma(temp_106, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000208: 0x51A0049400570808 Ffma
    temp_122 = fma(temp_106, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000210: 0x4C58100C00370606 Fadd
    temp_123 = temp_118 + vp_c3.data[0].w;
    // 0x000218: 0x49A0018C00A70000 Ffma
    temp_124 = fma(temp_114, vp_c3.data[2].z, temp_119);
    // 0x000228: 0x4C58100C00770202 Fadd
    temp_125 = temp_120 + vp_c3.data[1].w;
    // 0x000230: 0x49A0029400070A09 Ffma
    temp_126 = fma(temp_104, vp_c5.data[0].x, temp_121);
    // 0x000238: 0x49A0018C00A70101 Ffma
    temp_127 = fma(temp_111, vp_c3.data[2].z, temp_119);
    // 0x000248: 0xEFF07F800907FF09 Ast
    out_attr1.x = temp_126;
    // 0x000250: 0x4C68100C02870604 Fmul
    temp_128 = temp_123 * vp_c3.data[10].x;
    // 0x000258: 0x4C68100C02470607 Fmul
    temp_129 = temp_123 * vp_c3.data[9].x;
    // 0x000268: 0x4C68100C02070603 Fmul
    temp_130 = temp_123 * vp_c3.data[8].x;
    // 0x000270: 0x4C58100C00B70000 Fadd
    temp_131 = temp_124 + vp_c3.data[2].w;
    // 0x000278: 0x49A0041400170A08 Ffma
    temp_132 = fma(temp_104, vp_c5.data[0].y, temp_122);
    // 0x000288: 0x4C58100C00B70101 Fadd
    temp_133 = temp_127 + vp_c3.data[2].w;
    // 0x000290: 0xEFF07F800947FF08 Ast
    out_attr1.y = temp_132;
    // 0x000298: 0x49A0020C02970205 Ffma
    temp_134 = fma(temp_125, vp_c3.data[10].y, temp_128);
    // 0x0002A8: 0xEFF07F800887FF01 Ast
    out_attr0.z = temp_133;
    // 0x0002B0: 0x4C68100C01C70604 Fmul
    temp_135 = temp_123 * vp_c3.data[7].x;
    // 0x0002B8: 0x49A0038C02570207 Ffma
    temp_136 = fma(temp_125, vp_c3.data[9].y, temp_129);
    // 0x0002C8: 0x49A0018C02170203 Ffma
    temp_137 = fma(temp_125, vp_c3.data[8].y, temp_130);
    // 0x0002D0: 0x49A0028C02A70005 Ffma
    temp_138 = fma(temp_131, vp_c3.data[10].z, temp_134);
    // 0x0002D8: 0x49A0020C01D70202 Ffma
    temp_139 = fma(temp_125, vp_c3.data[7].y, temp_135);
    // 0x0002E8: 0x49A0038C02670007 Ffma
    temp_140 = fma(temp_131, vp_c3.data[9].z, temp_136);
    // 0x0002F0: 0x49A0018C02270003 Ffma
    temp_141 = fma(temp_131, vp_c3.data[8].z, temp_137);
    // 0x0002F8: 0x4C58100C02B70505 Fadd
    temp_142 = temp_138 + vp_c3.data[10].w;
    // 0x000308: 0x49A0010C01E70002 Ffma
    temp_143 = fma(temp_131, vp_c3.data[7].z, temp_139);
    // 0x000310: 0xEFF07F8007C7FF05 Ast
    gl_Position.w = temp_142;
    // 0x000318: 0x4C58100C02770707 Fadd
    temp_144 = temp_140 + vp_c3.data[9].w;
    // 0x000328: 0x4C58100C02370303 Fadd
    temp_145 = temp_141 + vp_c3.data[8].w;
    // 0x000330: 0xEFF07F800787FF07 Ast
    gl_Position.z = temp_144;
    // 0x000338: 0x4C58100C01F70202 Fadd
    temp_146 = temp_143 + vp_c3.data[7].w;
    // 0x000348: 0xEFF07F800747FF03 Ast
    gl_Position.y = temp_145;
    // 0x000350: 0xEFF07F800707FF02 Ast
    gl_Position.x = temp_146;
    // 0x000358: 0xE30000000007000F Exit
    return;
}
