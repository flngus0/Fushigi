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

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 2, std140) uniform _vp_c1
{
    precise vec4 data[4096];
} vp_c1;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 8) in vec4 in_attr8;
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;


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
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
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
    int temp_124;
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
    int temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    int temp_147;
    uint temp_148;
    uint temp_149;
    int temp_150;
    precise float temp_151;
    int temp_152;
    uint temp_153;
    int temp_154;
    precise float temp_155;
    precise float temp_156;
    int temp_157;
    uint temp_158;
    uint temp_159;
    int temp_160;
    precise float temp_161;
    int temp_162;
    uint temp_163;
    int temp_164;
    precise float temp_165;
    precise float temp_166;
    int temp_167;
    uint temp_168;
    uint temp_169;
    int temp_170;
    precise float temp_171;
    precise float temp_172;
    int temp_173;
    uint temp_174;
    uint temp_175;
    int temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C9807980CC70000 Mov
    // 0x000010: 0xEFD87F800807FF0C Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4C9807980CD70001 Mov
    // 0x000028: 0xEFD87F800847FF09 Ald
    temp_1 = in_attr0.y;
    // 0x000030: 0x4C9807980CE70012 Mov
    // 0x000038: 0xEFD87F800887FF07 Ald
    temp_2 = in_attr0.z;
    // 0x000048: 0x4C6810180CC70000 Fmul
    temp_3 = vp_c6.data[51].x * vp_c6.data[51].x;
    // 0x000050: 0xEFD87F801407FF0B Ald
    temp_4 = in_attr12.x;
    // 0x000058: 0x49A000180CD70100 Ffma
    temp_5 = fma(vp_c6.data[51].y, vp_c6.data[51].y, temp_3);
    // 0x000068: 0xEFD87F801447FF0E Ald
    temp_6 = in_attr12.y;
    // 0x000070: 0x49A000180CE71212 Ffma
    temp_7 = fma(vp_c6.data[51].z, vp_c6.data[51].z, temp_5);
    // 0x000078: 0xEFD87F801487FF08 Ald
    temp_8 = in_attr12.z;
    // 0x000088: 0x4C68101000470C00 Fmul
    temp_9 = temp_0 * vp_c4.data[1].x;
    // 0x000090: 0x5080000000571212 Mufu
    temp_10 = inversesqrt(temp_7);
    // 0x000098: 0x4C68101000070C02 Fmul
    temp_11 = temp_0 * vp_c4.data[0].x;
    // 0x0000A8: 0x49A0001000570900 Ffma
    temp_12 = fma(temp_1, vp_c4.data[1].y, temp_9);
    // 0x0000B0: 0x49A0011000170901 Ffma
    temp_13 = fma(temp_1, vp_c4.data[0].y, temp_11);
    // 0x0000B8: 0x4C68101000870C02 Fmul
    temp_14 = temp_0 * vp_c4.data[2].x;
    // 0x0000C8: 0x4C68101000870B05 Fmul
    temp_15 = temp_4 * vp_c4.data[2].x;
    // 0x0000D0: 0x49A0001000670700 Ffma
    temp_16 = fma(temp_2, vp_c4.data[1].z, temp_12);
    // 0x0000D8: 0x4C6810180CC71203 Fmul
    temp_17 = temp_10 * vp_c6.data[51].x;
    // 0x0000E8: 0x49A0011000970902 Ffma
    temp_18 = fma(temp_1, vp_c4.data[2].y, temp_14);
    // 0x0000F0: 0x49A0009000270701 Ffma
    temp_19 = fma(temp_2, vp_c4.data[0].z, temp_13);
    // 0x0000F8: 0x4C6810180CE71211 Fmul
    temp_20 = temp_10 * vp_c6.data[51].z;
    // 0x000108: 0x49A0029000970E05 Ffma
    temp_21 = fma(temp_6, vp_c4.data[2].y, temp_15);
    // 0x000110: 0x4C58101000770006 Fadd
    temp_22 = temp_16 + vp_c4.data[1].w;
    // 0x000118: 0x49A101980CF70300 Ffma
    temp_23 = 0.0 - vp_c6.data[51].w;
    temp_24 = fma(temp_17, temp_23, temp_17);
    // 0x000128: 0x4C6810180CD71212 Fmul
    temp_25 = temp_10 * vp_c6.data[51].y;
    // 0x000130: 0x4C58101000370104 Fadd
    temp_26 = temp_19 + vp_c4.data[0].w;
    // 0x000138: 0x4C68101000470B01 Fmul
    temp_27 = temp_4 * vp_c4.data[1].x;
    // 0x000148: 0x49A0029000A70805 Ffma
    temp_28 = fma(temp_8, vp_c4.data[2].z, temp_21);
    // 0x000150: 0x4C6810140967060A Fmul
    temp_29 = temp_22 * vp_c5.data[37].z;
    // 0x000158: 0x1E23DCCCCCD7000D Fmul32i
    temp_30 = temp_24 * 0.100000001;
    // 0x000168: 0x49A0011000A70700 Ffma
    temp_31 = fma(temp_2, vp_c4.data[2].z, temp_18);
    // 0x000170: 0x49A108980CF71102 Ffma
    temp_32 = 0.0 - vp_c6.data[51].w;
    temp_33 = fma(temp_20, temp_32, temp_20);
    // 0x000178: 0x49A0009000570E01 Ffma
    temp_34 = fma(temp_6, vp_c4.data[1].y, temp_27);
    // 0x000188: 0x5C58300000E70909 Fadd
    temp_35 = 0.0 - temp_6;
    temp_36 = temp_1 + temp_35;
    // 0x000190: 0x59A1050000D7040F Ffma
    temp_37 = 0.0 - temp_30;
    temp_38 = fma(temp_26, temp_37, temp_29);
    // 0x000198: 0x4C58101000B70000 Fadd
    temp_39 = temp_31 + vp_c4.data[2].w;
    // 0x0001A8: 0x1E23DCCCCCD70202 Fmul32i
    temp_40 = temp_33 * 0.100000001;
    // 0x0001B0: 0x4C68101000070B0D Fmul
    temp_41 = temp_4 * vp_c4.data[0].x;
    // 0x0001B8: 0x4C98079C2307000A Mov
    // 0x0001C8: 0x49A0009000670810 Ffma
    temp_42 = fma(temp_8, vp_c4.data[1].z, temp_34);
    // 0x0001D0: 0x4C58101000B70501 Fadd
    temp_43 = temp_28 + vp_c4.data[2].w;
    // 0x0001D8: 0x5C58300000B70C0B Fadd
    temp_44 = 0.0 - temp_4;
    temp_45 = temp_0 + temp_44;
    // 0x0001E8: 0xEFD87F800A47FF0C Ald
    temp_46 = in_attr2.y;
    // 0x0001F0: 0x59A007800027000F Ffma
    temp_47 = fma(temp_39, temp_40, temp_38);
    // 0x0001F8: 0x49A0069000170E0D Ffma
    temp_48 = fma(temp_6, vp_c4.data[0].y, temp_41);
    // 0x000208: 0xEFD87F800947FF0E Ald
    temp_49 = in_attr1.y;
    // 0x000210: 0x4C58101000771010 Fadd
    temp_50 = temp_42 + vp_c4.data[1].w;
    // 0x000218: 0x5C58300000170013 Fadd
    temp_51 = 0.0 - temp_43;
    temp_52 = temp_39 + temp_51;
    // 0x000228: 0x32A007BF00070A0A Ffma
    temp_53 = fma(vp_c7.data[140].x, 0.5, temp_47);
    // 0x000230: 0x5C59100000170101 Fadd
    temp_54 = 0.0 - temp_43;
    temp_55 = temp_54 + temp_43;
    // 0x000238: 0x49A0069000270802 Ffma
    temp_56 = fma(temp_8, vp_c4.data[0].z, temp_48);
    // 0x000248: 0x5C58300001070605 Fadd
    temp_57 = 0.0 - temp_50;
    temp_58 = temp_22 + temp_57;
    // 0x000250: 0x3868104040070A0D Fmul
    temp_59 = temp_53 * 3.0;
    // 0x000258: 0x5C90000000A7000F Rro
    // 0x000268: 0x38681040A0070A16 Fmul
    temp_60 = temp_53 * 5.0;
    // 0x000270: 0x5080000000070F0F Mufu
    temp_61 = cos(temp_53);
    // 0x000278: 0x4C58101000370202 Fadd
    temp_62 = temp_56 + vp_c4.data[0].w;
    // 0x000288: 0x59A202800137FF15 Ffma
    temp_63 = 0.0 - temp_58;
    temp_64 = fma(0.0, temp_52, temp_63);
    // 0x000290: 0x4C68101409770A17 Fmul
    temp_65 = temp_53 * vp_c5.data[37].w;
    // 0x000298: 0x5C90000000D70019 Rro
    // 0x0002A8: 0xEFD87F8014C7FF0D Ald
    temp_66 = in_attr12.w;
    // 0x0002B0: 0x5C90000001670016 Rro
    // 0x0002B8: 0x508000000007190A Mufu
    temp_67 = cos(temp_59);
    // 0x0002C8: 0x5C58300000270414 Fadd
    temp_68 = 0.0 - temp_62;
    temp_69 = temp_26 + temp_68;
    // 0x0002D0: 0x5080000000071616 Mufu
    temp_70 = cos(temp_60);
    // 0x0002D8: 0x5C68100001570315 Fmul
    temp_71 = temp_17 * temp_64;
    // 0x0002E8: 0x5C9000000177001A Rro
    // 0x0002F0: 0x5080000000171A18 Mufu
    temp_72 = sin(temp_65);
    // 0x0002F8: 0x5C68100000F70F17 Fmul
    temp_73 = temp_61 * temp_61;
    // 0x000308: 0xEFD87F801047FF0F Ald
    temp_74 = in_attr8.y;
    // 0x000310: 0x59A10A000137FF13 Ffma
    temp_75 = 0.0 - temp_52;
    temp_76 = fma(0.0, temp_75, temp_69);
    // 0x000318: 0x5C6910000147FF14 Fmul
    temp_77 = 0.0 - temp_69;
    temp_78 = 0.0 * temp_77;
    // 0x000328: 0x4C98079400370019 Mov
    // 0x000330: 0x59A00A8001371213 Ffma
    temp_79 = fma(temp_25, temp_76, temp_71);
    // 0x000338: 0xEFD87F800A07FF15 Ald
    temp_80 = in_attr2.x;
    // 0x000348: 0x59A00A000057FF14 Ffma
    temp_81 = fma(0.0, temp_58, temp_78);
    // 0x000350: 0x5C68100000A71705 Fmul
    temp_82 = temp_73 * temp_67;
    // 0x000358: 0xEFD87F800907FF0A Ald
    temp_83 = in_attr1.x;
    // 0x000368: 0x1E23DCCCCCD71818 Fmul32i
    temp_84 = temp_72 * 0.100000001;
    // 0x000370: 0x5C68100000B70B17 Fmul
    temp_85 = temp_45 * temp_45;
    // 0x000378: 0x59A0098001471113 Ffma
    temp_86 = fma(temp_20, temp_81, temp_79);
    // 0x000388: 0x4C68101409570D0D Fmul
    temp_87 = temp_66 * vp_c5.data[37].y;
    // 0x000390: 0x4C98079400270014 Mov
    // 0x000398: 0x5C68120001670505 Fmul
    temp_88 = temp_82 * 0.5;
    temp_89 = temp_88 * temp_70;
    // 0x0003A8: 0x5C58300000870716 Fadd
    temp_90 = 0.0 - temp_8;
    temp_91 = temp_2 + temp_90;
    // 0x0003B0: 0x59A00B8000970917 Ffma
    temp_92 = fma(temp_36, temp_36, temp_85);
    // 0x0003B8: 0x59A00C0000571318 Ffma
    temp_93 = fma(temp_86, temp_89, temp_84);
    // 0x0003C8: 0x4C6810180CF70D13 Fmul
    temp_94 = temp_87 * vp_c6.data[51].w;
    // 0x0003D0: 0xEFD87F800A87FF0D Ald
    temp_95 = in_attr2.z;
    // 0x0003D8: 0x51A00A1400470F07 Ffma
    temp_96 = fma(temp_74, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0003E8: 0xEFD87F800987FF14 Ald
    temp_97 = in_attr1.z;
    // 0x0003F0: 0x51A00C9400570F08 Ffma
    temp_98 = fma(temp_74, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x0003F8: 0x5C6810000187130B Fmul
    temp_99 = temp_94 * temp_93;
    // 0x000408: 0x4C6810100007150F Fmul
    temp_100 = temp_80 * vp_c4.data[0].x;
    // 0x000410: 0x4C6810100047151B Fmul
    temp_101 = temp_80 * vp_c4.data[1].x;
    // 0x000418: 0x4C6810100087151A Fmul
    temp_102 = temp_80 * vp_c4.data[2].x;
    // 0x000428: 0x4C68101000070A18 Fmul
    temp_103 = temp_83 * vp_c4.data[0].x;
    // 0x000430: 0x5C90000000B7001C Rro
    // 0x000438: 0x4C68101000870A15 Fmul
    temp_104 = temp_83 * vp_c4.data[2].x;
    // 0x000448: 0x5080000000171C09 Mufu
    temp_105 = sin(temp_99);
    // 0x000450: 0x4C68101000470A19 Fmul
    temp_106 = temp_83 * vp_c4.data[1].x;
    // 0x000458: 0x5080000000071C0B Mufu
    temp_107 = cos(temp_99);
    // 0x000468: 0x49A0079000170C0A Ffma
    temp_108 = fma(temp_46, vp_c4.data[0].y, temp_100);
    // 0x000470: 0x49A00D9000570C0F Ffma
    temp_109 = fma(temp_46, vp_c4.data[1].y, temp_101);
    // 0x000478: 0x59A00B800167161B Ffma
    temp_110 = fma(temp_91, temp_91, temp_92);
    // 0x000488: 0x49A00C1000170E16 Ffma
    temp_111 = fma(temp_49, vp_c4.data[0].y, temp_103);
    // 0x000490: 0x5080000000871B18 Mufu
    temp_112 = sqrt(temp_110);
    // 0x000498: 0x49A00D1000970C1A Ffma
    temp_113 = fma(temp_46, vp_c4.data[2].y, temp_102);
    // 0x0004A8: 0x49A00A9000970E15 Ffma
    temp_114 = fma(temp_49, vp_c4.data[2].y, temp_104);
    // 0x0004B0: 0x49A00C9000570E1D Ffma
    temp_115 = fma(temp_49, vp_c4.data[1].y, temp_106);
    // 0x0004B8: 0x49A0051000270D0A Ffma
    temp_116 = fma(temp_95, vp_c4.data[0].z, temp_108);
    // 0x0004C8: 0x49A00D1000A70D0C Ffma
    temp_117 = fma(temp_95, vp_c4.data[2].z, temp_113);
    // 0x0004D0: 0x5C69100000971019 Fmul
    temp_118 = 0.0 - temp_105;
    temp_119 = temp_50 * temp_118;
    // 0x0004D8: 0x5C68100000B71017 Fmul
    temp_120 = temp_50 * temp_107;
    // 0x0004E8: 0x49A0079000670D0D Ffma
    temp_121 = fma(temp_95, vp_c4.data[1].z, temp_109);
    // 0x0004F0: 0x49A00A9000A7140F Ffma
    temp_122 = fma(temp_97, vp_c4.data[2].z, temp_114);
    // 0x0004F8: 0x4CB0119002371A15 F2i
    temp_123 = trunc(vp_c4.data[8].w);
    temp_124 = int(temp_123);
    // 0x000508: 0x49A00B100027140E Ffma
    temp_125 = fma(temp_97, vp_c4.data[0].z, temp_111);
    // 0x000510: 0x5C68100001871216 Fmul
    temp_126 = temp_25 * temp_112;
    // 0x000518: 0x59A30C8000B70219 Ffma
    temp_127 = 0.0 - temp_107;
    temp_128 = 0.0 - temp_119;
    temp_129 = fma(temp_62, temp_127, temp_128);
    // 0x000528: 0x5C68100001870312 Fmul
    temp_130 = temp_17 * temp_112;
    // 0x000530: 0x59A30B8000970217 Ffma
    temp_131 = 0.0 - temp_105;
    temp_132 = 0.0 - temp_120;
    temp_133 = fma(temp_62, temp_131, temp_132);
    // 0x000538: 0x5C68100001871118 Fmul
    temp_134 = temp_20 * temp_112;
    // 0x000548: 0xEFD87F801007FF11 Ald
    temp_135 = in_attr8.x;
    // 0x000550: 0x49A00E9000671414 Ffma
    temp_136 = fma(temp_97, vp_c4.data[1].z, temp_115);
    // 0x000558: 0x5C68100000E70E03 Fmul
    temp_137 = temp_125 * temp_125;
    // 0x000568: 0x5C58100001970219 Fadd
    temp_138 = temp_62 + temp_129;
    // 0x000570: 0x5C68100000A70A1A Fmul
    temp_139 = temp_116 * temp_116;
    // 0x000578: 0x5C58100001771002 Fadd
    temp_140 = temp_50 + temp_133;
    // 0x000588: 0x5C68100001671310 Fmul
    temp_141 = temp_94 * temp_126;
    // 0x000590: 0x5C68100001871316 Fmul
    temp_142 = temp_94 * temp_134;
    // 0x000598: 0x384800000047151B Shl
    temp_143 = temp_124 << 4;
    // 0x0005A8: 0x5C58100000170015 Fadd
    temp_144 = temp_39 + temp_55;
    // 0x0005B0: 0x59A00C800007FF1C Ffma
    temp_145 = fma(0.0, temp_39, temp_138);
    // 0x0005B8: 0x59A001000007FF18 Ffma
    temp_146 = fma(0.0, temp_39, temp_140);
    // 0x0005C8: 0xEF95007068071B00 Ldc
    temp_147 = temp_143 + 0x680;
    temp_148 = uint(temp_147) >> 2;
    temp_149 = temp_148 >> 2;
    temp_150 = int(temp_148) & 3;
    temp_151 = vp_c7.data[int(temp_149)][temp_150];
    temp_152 = int(temp_148) + 1;
    temp_153 = uint(temp_152) >> 2;
    temp_154 = temp_152 & 3;
    temp_155 = vp_c7.data[int(temp_153)][temp_154];
    // 0x0005D0: 0x59A001800147141E Ffma
    temp_156 = fma(temp_136, temp_136, temp_137);
    // 0x0005D8: 0xEF95007048071B02 Ldc
    temp_157 = temp_143 + 0x480;
    temp_158 = uint(temp_157) >> 2;
    temp_159 = temp_158 >> 2;
    temp_160 = int(temp_158) & 3;
    temp_161 = vp_c7.data[int(temp_159)][temp_160];
    temp_162 = int(temp_158) + 1;
    temp_163 = uint(temp_162) >> 2;
    temp_164 = temp_162 & 3;
    temp_165 = vp_c7.data[int(temp_163)][temp_164];
    // 0x0005E8: 0x5C68100001271317 Fmul
    temp_166 = temp_94 * temp_130;
    // 0x0005F0: 0xEF94007068871B13 Ldc
    temp_167 = temp_143 + 0x688;
    temp_168 = uint(temp_167) >> 2;
    temp_169 = temp_168 >> 2;
    temp_170 = int(temp_168) & 3;
    temp_171 = vp_c7.data[int(temp_169)][temp_170];
    // 0x0005F8: 0x59A00D0000D70D19 Ffma
    temp_172 = fma(temp_121, temp_121, temp_139);
    // 0x000608: 0xEF94007048871B12 Ldc
    temp_173 = temp_143 + 0x488;
    temp_174 = uint(temp_173) >> 2;
    temp_175 = temp_174 >> 2;
    temp_176 = int(temp_174) & 3;
    temp_177 = vp_c7.data[int(temp_175)][temp_176];
    // 0x000610: 0x59A10E000097061D Ffma
    temp_178 = 0.0 - temp_105;
    temp_179 = fma(temp_22, temp_178, temp_145);
    // 0x000618: 0x5C68100001070510 Fmul
    temp_180 = temp_89 * temp_141;
    // 0x000628: 0x59A00C0000B7061A Ffma
    temp_181 = fma(temp_22, temp_107, temp_146);
    // 0x000630: 0x59A00F0000F70F1F Ffma
    temp_182 = fma(temp_122, temp_122, temp_156);
    // 0x000638: 0x59A00A800067FF1E Ffma
    temp_183 = fma(0.0, temp_22, temp_144);
    // 0x000648: 0xEFD87F800AC7FF06 Ald
    temp_184 = in_attr2.w;
    // 0x000650: 0x5C6810000177051C Fmul
    temp_185 = temp_89 * temp_166;
    // 0x000658: 0x5080000000571F15 Mufu
    temp_186 = inversesqrt(temp_182);
    // 0x000668: 0x59A00E8000B7040B Ffma
    temp_187 = fma(temp_26, temp_107, temp_179);
    // 0x000670: 0x5C68100001670516 Fmul
    temp_188 = temp_89 * temp_142;
    // 0x000678: 0x49A0039400071118 Ffma
    temp_189 = fma(temp_135, vp_c5.data[0].x, temp_96);
    // 0x000688: 0x59A00C8000C70C07 Ffma
    temp_190 = fma(temp_117, temp_117, temp_172);
    // 0x000690: 0xEFF07F800D07FF18 Ast
    out_attr5.x = temp_189;
    // 0x000698: 0x59A00D000097041A Ffma
    temp_191 = fma(temp_26, temp_105, temp_181);
    // 0x0006A8: 0x5080000000570707 Mufu
    temp_192 = inversesqrt(temp_190);
    // 0x0006B0: 0x59A10F000047FF19 Ffma
    temp_193 = 0.0 - temp_26;
    temp_194 = fma(0.0, temp_193, temp_183);
    // 0x0006B8: 0x49A0058400071C0B Ffma
    temp_195 = fma(temp_185, vp_c1.data[0].x, temp_187);
    // 0x0006C8: 0x49A0041400171108 Ffma
    temp_196 = fma(temp_135, vp_c5.data[0].y, temp_98);
    // 0x0006D0: 0x5C68100001570F0F Fmul
    temp_197 = temp_122 * temp_186;
    // 0x0006D8: 0xEFF07F800D47FF08 Ast
    out_attr5.y = temp_196;
    // 0x0006E8: 0x49A00D0400071010 Ffma
    temp_198 = fma(temp_180, vp_c1.data[0].x, temp_191);
    // 0x0006F0: 0xEFF07F800887FF0F Ast
    out_attr0.z = temp_197;
    // 0x0006F8: 0x49A00C8400071619 Ffma
    temp_199 = fma(temp_188, vp_c1.data[0].x, temp_194);
    // 0x000708: 0x59A0000000270B00 Ffma
    temp_200 = fma(temp_195, temp_161, temp_151);
    // 0x000710: 0x5C68100000770D0D Fmul
    temp_201 = temp_121 * temp_192;
    // 0x000718: 0x5C68100001571414 Fmul
    temp_202 = temp_136 * temp_186;
    // 0x000728: 0xEFF07F800947FF0D Ast
    out_attr1.y = temp_201;
    // 0x000730: 0x59A0008000371001 Ffma
    temp_203 = fma(temp_198, temp_165, temp_155);
    // 0x000738: 0xEFF07F800847FF14 Ast
    out_attr0.y = temp_202;
    // 0x000748: 0x59A0098001271912 Ffma
    temp_204 = fma(temp_199, temp_177, temp_171);
    // 0x000750: 0x4C68100C00070003 Fmul
    temp_205 = temp_200 * vp_c3.data[0].x;
    // 0x000758: 0x5C68100000770C05 Fmul
    temp_206 = temp_117 * temp_192;
    // 0x000768: 0x5C68100000770A0A Fmul
    temp_207 = temp_116 * temp_192;
    // 0x000770: 0xEFF07F800987FF05 Ast
    out_attr1.z = temp_206;
    // 0x000778: 0x5C68100000F70D07 Fmul
    temp_208 = temp_201 * temp_197;
    // 0x000788: 0xEFF07F800907FF0A Ast
    out_attr1.x = temp_207;
    // 0x000790: 0x5C68100001570E0E Fmul
    temp_209 = temp_125 * temp_186;
    // 0x000798: 0x4C58101002071202 Fadd
    temp_210 = temp_204 + vp_c4.data[8].x;
    // 0x0007A8: 0xEFF07F800807FF0E Ast
    out_attr0.x = temp_209;
    // 0x0007B0: 0x49A0018C00170103 Ffma
    temp_211 = fma(temp_203, vp_c3.data[0].y, temp_205);
    // 0x0007B8: 0x4C68100C00470004 Fmul
    temp_212 = temp_200 * vp_c3.data[1].x;
    // 0x0007C8: 0x5C68100001470A0B Fmul
    temp_213 = temp_207 * temp_202;
    // 0x0007D0: 0x59A2038001470514 Ffma
    temp_214 = 0.0 - temp_208;
    temp_215 = fma(temp_206, temp_202, temp_214);
    // 0x0007D8: 0x5C68100000E70508 Fmul
    temp_216 = temp_206 * temp_209;
    // 0x0007E8: 0x4C68100C00870007 Fmul
    temp_217 = temp_200 * vp_c3.data[2].x;
    // 0x0007F0: 0x49A0018C00270203 Ffma
    temp_218 = fma(temp_210, vp_c3.data[0].z, temp_211);
    // 0x0007F8: 0x49A0020C00570104 Ffma
    temp_219 = fma(temp_203, vp_c3.data[1].y, temp_212);
    // 0x000808: 0x59A2058000E70D0B Ffma
    temp_220 = 0.0 - temp_213;
    temp_221 = fma(temp_201, temp_209, temp_220);
    // 0x000810: 0x4C58300C03771209 Fadd
    temp_222 = 0.0 - vp_c3.data[13].w;
    temp_223 = temp_204 + temp_222;
    // 0x000818: 0x59A2040000F70A08 Ffma
    temp_224 = 0.0 - temp_216;
    temp_225 = fma(temp_207, temp_197, temp_224);
    // 0x000828: 0xEFF07F800B87FF09 Ast
    out_attr3.z = temp_223;
    // 0x000830: 0x49A0038C00970107 Ffma
    temp_226 = fma(temp_203, vp_c3.data[2].y, temp_217);
    // 0x000838: 0x4C58100C00370303 Fadd
    temp_227 = temp_218 + vp_c3.data[0].w;
    // 0x000848: 0x49A0020C00670204 Ffma
    temp_228 = fma(temp_210, vp_c3.data[1].z, temp_219);
    // 0x000850: 0x5C68100000671414 Fmul
    temp_229 = temp_215 * temp_184;
    // 0x000858: 0x5C68100000670B0B Fmul
    temp_230 = temp_221 * temp_184;
    // 0x000868: 0xEFF07F800A07FF14 Ast
    out_attr2.x = temp_229;
    // 0x000870: 0x5C6810000067080A Fmul
    temp_231 = temp_225 * temp_184;
    // 0x000878: 0xEFF07F800A87FF0B Ast
    out_attr2.z = temp_230;
    // 0x000888: 0x49A0038C00A70202 Ffma
    temp_232 = fma(temp_210, vp_c3.data[2].z, temp_226);
    // 0x000890: 0xEFF07F800A47FF0A Ast
    out_attr2.y = temp_231;
    // 0x000898: 0x49A0038C00A71212 Ffma
    temp_233 = fma(temp_204, vp_c3.data[2].z, temp_226);
    // 0x0008A8: 0x4C68100C02870305 Fmul
    temp_234 = temp_227 * vp_c3.data[10].x;
    // 0x0008B0: 0x4C68100C02470306 Fmul
    temp_235 = temp_227 * vp_c3.data[9].x;
    // 0x0008B8: 0x4C68100C01C70307 Fmul
    temp_236 = temp_227 * vp_c3.data[7].x;
    // 0x0008C8: 0x4C58100C00770404 Fadd
    temp_237 = temp_228 + vp_c3.data[1].w;
    // 0x0008D0: 0x4C68100C02070303 Fmul
    temp_238 = temp_227 * vp_c3.data[8].x;
    // 0x0008D8: 0x4C58300C02F70008 Fadd
    temp_239 = 0.0 - vp_c3.data[11].w;
    temp_240 = temp_200 + temp_239;
    // 0x0008E8: 0x4C58100C00B70202 Fadd
    temp_241 = temp_232 + vp_c3.data[2].w;
    // 0x0008F0: 0xEFF07F800B07FF08 Ast
    out_attr3.x = temp_240;
    // 0x0008F8: 0x49A0028C02970405 Ffma
    temp_242 = fma(temp_237, vp_c3.data[10].y, temp_234);
    // 0x000908: 0x49A0030C02570400 Ffma
    temp_243 = fma(temp_237, vp_c3.data[9].y, temp_235);
    // 0x000910: 0x49A0038C01D70407 Ffma
    temp_244 = fma(temp_237, vp_c3.data[7].y, temp_236);
    // 0x000918: 0x49A0018C02170403 Ffma
    temp_245 = fma(temp_237, vp_c3.data[8].y, temp_238);
    // 0x000928: 0x4C58300C03370101 Fadd
    temp_246 = 0.0 - vp_c3.data[12].w;
    temp_247 = temp_203 + temp_246;
    // 0x000930: 0x4C58100C00B71212 Fadd
    temp_248 = temp_233 + vp_c3.data[2].w;
    // 0x000938: 0xEFF07F800B47FF01 Ast
    out_attr3.y = temp_247;
    // 0x000948: 0x49A0028C02A70205 Ffma
    temp_249 = fma(temp_241, vp_c3.data[10].z, temp_242);
    // 0x000950: 0xEFF07F800C87FF12 Ast
    out_attr4.z = temp_248;
    // 0x000958: 0x49A0000C02670200 Ffma
    temp_250 = fma(temp_241, vp_c3.data[9].z, temp_243);
    // 0x000968: 0x49A0038C01E70207 Ffma
    temp_251 = fma(temp_241, vp_c3.data[7].z, temp_244);
    // 0x000970: 0x49A0018C02270203 Ffma
    temp_252 = fma(temp_241, vp_c3.data[8].z, temp_245);
    // 0x000978: 0x4C58100C02B70505 Fadd
    temp_253 = temp_249 + vp_c3.data[10].w;
    // 0x000988: 0x4C58100C02770000 Fadd
    temp_254 = temp_250 + vp_c3.data[9].w;
    // 0x000990: 0xEFF07F8007C7FF05 Ast
    gl_Position.w = temp_253;
    // 0x000998: 0x4C58100C01F70707 Fadd
    temp_255 = temp_251 + vp_c3.data[7].w;
    // 0x0009A8: 0xEFF07F800787FF00 Ast
    gl_Position.z = temp_254;
    // 0x0009B0: 0x4C58100C02370303 Fadd
    temp_256 = temp_252 + vp_c3.data[8].w;
    // 0x0009B8: 0xEFF07F800707FF07 Ast
    gl_Position.x = temp_255;
    // 0x0009C8: 0xEFF07F800747FF03 Ast
    gl_Position.y = temp_256;
    // 0x0009D0: 0xE30000000007000F Exit
    return;
}
